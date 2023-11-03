import userSchema from '../../schemas/mongoose/userSchema.js'

async function updateUserByToken(token, customizationJoi) {
  console.log('🚀 ~ file: updateUser.js:4 ~ updateUser ~ customizationJoi:', customizationJoi)
  try {
    const filter = { token: token }
    const result = await userSchema.findOneAndUpdate(filter, customizationJoi, {
      new: true,
    })

    return result
  } catch (error) {
    console.error(error)
  }
}
export default updateUserByToken
