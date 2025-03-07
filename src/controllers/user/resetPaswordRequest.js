import userSchema from '../../schemas/mongoose/userSchema.js'
import generateToken from '../../utils/generateToken'
import sendEmail from '../../utils/email/sendEmail'
import tokenSchema from '../../schemas/mongoose/tokenSchema.js'

async function resetPasswordRequest(req, res) {
  try {
    const { userJoi } = req.body
    const { email } = userJoi
    const user = await userSchema.findOne({ email })

    if (!user) throw new Error('User does not exist')

    let token = await tokenSchema.findOne({ userId: user._id })
    if (token) await token.deleteOne()

    const { accessToken, refreshToken } = await generateToken(user._id, user.email)

    await new tokenSchema({
      userId: user._id,
      token: accessToken,
      createdAt: Date.now(),
    }).save()

    const link = `planner.samuelpeybernesdev.fr/passwordReset?token=${accessToken}&id=${user._id}`
    await sendEmail(user.email, 'Demande de changement de mot de passe ?', { name: user.firstName, link: link }, './template/requestResetPassword.handlebars')
    return res.status(200).json('Email sent successfully!')
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default resetPasswordRequest
