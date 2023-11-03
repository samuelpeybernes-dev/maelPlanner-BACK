import userSchema from '../../schemas/mongoose/userSchema.js'

async function updateUserByEmail(userEmail, customizationJoi) {
  console.log('🚀 ~ file: updateUser.js:4 ~ updateUser ~ customizationJoi:', customizationJoi)
  try {
    const filter = { email: userEmail }
    const result = await userSchema.findOneAndUpdate(filter, customizationJoi, {
      new: true,
    })

    return result
  } catch (error) {
    console.error(error)
  }
}
export default updateUserByEmail
