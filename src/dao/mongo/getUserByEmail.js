import logger from '../../utils/logger'
import userSchema from '../../schemas/mongoose/userSchema.js'

async function getUserByEmail(email) {
  const user = await userSchema.findOne({ email })
  logger.debug(user)
  return user
}

export default getUserByEmail
