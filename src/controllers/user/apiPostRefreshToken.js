import generateToken from '../../utils/generateToken'
import { JWT_REFRESH_TOKEN_SECRET } from '../../config/dotenv'
import jwt from 'jsonwebtoken'

async function verifyRefreshToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_REFRESH_TOKEN_SECRET, (err, tokenDetails) => {
      if (err) {
        // Utilisez Promise.reject() avec un objet Error
        return reject(new Error('Invalid refresh token by jwt'))
      }
      return resolve(tokenDetails)
    })
  })
}

async function apiPostRefreshToken(req, res) {
  try {
    const resp = await verifyRefreshToken(req.body.refreshToken)

    // if (!resp.user) {
    //   return res.status(403).json({ message: 'Invalid refresh token after verify' })
    // }

    const { accessToken, refreshToken } = await generateToken(resp._id, resp.email)
    const responseObj = {
      message: 'Token refreshed',
      data: { accessToken, refreshToken },
    }

    return res.status(200).json(responseObj)
  } catch (error) {
    console.error(error)
    // Utilisez error.message pour renvoyer le message d'erreur
    return res.status(500).json({ error: error.message })
  }
}

export default apiPostRefreshToken
