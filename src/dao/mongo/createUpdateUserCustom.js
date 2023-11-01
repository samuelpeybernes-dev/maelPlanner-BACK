import userSchema from '../../schemas/mongoose/userSchema.js'

async function createUpdateUserCustom(userEmail, customizationJoi) {
  console.log('🚀 ~ file: createUpdateUserCustom.js:4 ~ createUpdateUserCustom ~ customizationJoi:', customizationJoi)
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
export default createUpdateUserCustom
