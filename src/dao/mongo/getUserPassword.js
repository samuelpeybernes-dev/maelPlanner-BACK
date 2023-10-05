import logger from '../../utils/logger'
import userSchema from '../../schemas/mongoose/userSchema.js'

async function getUser(email) {
  const user = await userSchema.findOne({ email }, { password: true })
  logger.debug(user)
  return user
}

export default getUser
