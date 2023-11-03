import userSchema from '../../schemas/mongoose/userSchema.js'

async function updateUserById(_id, customizationJoi) {
  try {
    const filter = { _id }
    const result = await userSchema.findOneAndUpdate(filter, customizationJoi, {
      new: true,
    })

    return result
  } catch (error) {
    console.error(error)
  }
}
export default updateUserById
