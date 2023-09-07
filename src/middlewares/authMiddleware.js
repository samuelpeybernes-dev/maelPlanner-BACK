/* eslint-disable no-prototype-builtins */
import fs from 'fs'
import jwt from 'jsonwebtoken'
import { JWT_PUB_KEY_PATH, REQUIRE_AUTH } from '../config/dotenv'

const JWT_PUB_KEY = fs.readFileSync(JWT_PUB_KEY_PATH, 'utf8')

async function authMiddleware(req, res, next) {
  if (!REQUIRE_AUTH) {
    req.jwt = {
      sub: {
        pseudo: 'dylan7212',
      },
    } // on veut pas de token, mais on a besoin d'un pseudo
    return next()
  }

  if (!req.headers.hasOwnProperty('authorization')) return res.status(401).json({ error: 'Authorization property is missing.' })

  const [bearerPart, tokenPart] = req.headers.authorization.split(' ')

  if (bearerPart === 'Bearer' && tokenPart.match(/\S+\.\S+\.\S+/) !== null) {
    try {
      //* décode le token
      const verification = jwt.verify(tokenPart, JWT_PUB_KEY, { algorithms: ['RS256'] })
      req.jwt = verification
      return next()
    } catch (error) {
      return res.status(401).json({ error: 'You are not authorized to visit this route.' })
    }
  }

  return res.status(401).json({ error: 'You are not authorized to visit this route.' })
}

export default authMiddleware
