import getUserByEmail from '../../dao/mongo/getUserByEmail'
import createUser from '../../dao/mongo/createUser'
import apiPostLogin from './apiPostLogin'

async function apiPostRegister(req, res) {
  try {
    const { name, email, password } = req.body
    const user = await getUserByEmail(email)
    if (user) {
      return res.status(401).json({ message: 'Existing user' })
    }
    await createUser(name, email, password)
    return await apiPostLogin(req, res)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default apiPostRegister
