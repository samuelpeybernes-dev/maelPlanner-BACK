import getUserPassword from '../../dao/mongo/getUserPassword'
import bcrypt from 'bcrypt'
import logger from '../../utils/logger'
import generateToken from '../../utils/generateToken'
import updateUserByEmail from '../../dao/mongo/updateUserByEmail'

async function apiPostLogin(req, res) {
  try {
    const email = req.body.email
    const password = req.body.password
    const resp = await getUserPassword(email)
    logger.debug(resp)
    if (resp == null) {
      logger.debug('Login failed')
      return res.status(401).json({ message: 'Login failed' })
    }
    if (bcrypt.compareSync(password, resp.password)) {
      const { accessToken, refreshToken } = await generateToken(resp._id, resp.email)
      const userJoi = {
        token: accessToken,
      }
      await updateUserByEmail(email, userJoi)
      return res.status(200).json({ accessToken, refreshToken })
    } else {
      return res.status(401).json({ message: 'Login failed' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default apiPostLogin
