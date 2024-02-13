import userSchema from '../../schemas/mongoose/userSchema.js'
import generateToken from '../../utils/generateToken'
import sendEmail from '../../utils/email/sendEmail'

async function resetPasswordRequest(req, res) {
  try {
    const { email } = req.body
    const user = await userSchema.findOne({ email })

    if (!user) throw new Error('User does not exist')
    const { accessToken, refreshToken } = await generateToken(user._id, user.email)

    const link = `https://planner.samuelpeybernesdev.fr/passwordReset?token=${accessToken}&id=${user._id}`
    sendEmail('samuel.peybernes@ecoles-epsi.net', 'Password Reset Request', { name: user.name, link: link }, './template/requestResetPassword.handlebars')
    return link
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default resetPasswordRequest
