import logger from '../../utils/logger'
import userSchema from '../../schemas/mongoose/userSchema.js'

async function getUserByToken(token) {
  const user = await userSchema.findOne(
    { token },
    {
      _id: 0,
      password: 0,
      token: 0,
    }
  )
  logger.debug(user)
  return user
}

export default getUserByToken
