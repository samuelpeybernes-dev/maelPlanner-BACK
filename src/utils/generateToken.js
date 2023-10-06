import { JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET } from '../config/dotenv'
import jwt from 'jsonwebtoken'

async function generateToken(_id, email) {
  const payload = { _id: _id, email: email }
  const accessToken = jwt.sign(payload, JWT_ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
  const refreshToken = jwt.sign(payload, JWT_REFRESH_TOKEN_SECRET, { expiresIn: '30d' })
  return { accessToken, refreshToken }
}

export default generateToken
