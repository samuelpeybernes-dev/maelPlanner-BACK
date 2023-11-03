import logger from '../../utils/logger'
import userSchema from '../../schemas/mongoose/userSchema.js'

async function getUserByEmail(email) {
  const user = await userSchema.findOne(
    { email },
    {
      _id: 0,
      password: 0,
    }
  )
  logger.debug(user)
  return user
}

export default getUserByEmail
