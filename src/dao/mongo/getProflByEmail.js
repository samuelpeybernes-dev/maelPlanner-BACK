import userSchema from '../../schemas/mongoose/userSchema.js'

async function getProflByEmail(email) {
  const profil = await userSchema.findOne(
    { email },
    {
      _id: 0,
      password: 0,
    }
  )
  return profil
}

export default getProflByEmail
