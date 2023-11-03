import logger from '../../utils/logger'
import userSchema from '../../schemas/mongoose/userSchema.js'

async function getUserById(_id) {
  const user = await userSchema.findOne(
    { _id },
    {
      _id: 0,
      password: 0,
    }
  )
  logger.debug(user)
  return user
}

export default getUserById
