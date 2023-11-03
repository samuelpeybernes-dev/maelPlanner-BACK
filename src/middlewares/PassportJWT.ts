import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'

import logger from '../utils/logger'
import UserModel from '../schemas/mongoose/userSchema'
import { JWT_ACCESS_TOKEN_SECRET } from '../config/dotenv'

passport.use(
  new Strategy(
    {
      secretOrKey: JWT_ACCESS_TOKEN_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload: any, done: any) => {
      try {
        const user = await UserModel.findById(payload._id)
        logger.info(payload)
        if (!user) {
          return done(null, false)
        }
        return done(null, user)
      } catch (err: any) {
        logger.error(err)
        return done(err, false)
      }
    }
  )
)

export default passport
