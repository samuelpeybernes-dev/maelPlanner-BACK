import tokenSchema from '../../schemas/mongoose/tokenSchema.js'
import bcrypt from 'bcrypt'
import updateUserById from '../../dao/mongo/updateUserById'
import userSchema from '../../schemas/mongoose/userSchema.js'
import sendEmail from '../../utils/email/sendEmail'

async function resetPassword(req, res) {
  try {
    const { userJoi } = req.body
    const { userId, token, password } = userJoi
    let passwordResetToken = await tokenSchema.findOne({ userId })
    if (!passwordResetToken) {
      throw new Error('Invalid or expired password reset token')
    }

    const isValid = JSON.stringify(token) === JSON.stringify(passwordResetToken.token)
    if (!isValid) {
      throw new Error('Invalid or expired password reset token')
    }

    const hash = await bcrypt.hashSync(password, 10)

    await updateUserById(userId, { password: hash })
    const user = await userSchema.findById({ _id: userId })

    await sendEmail(
      user.email,
      'Mot de passe réinitialisé avec succès ✅🔑',
      {
        name: user.firstName,
      },
      './template/resetPassword.handlebars'
    )
    await passwordResetToken.deleteOne()
    return res.json(true)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default resetPassword
