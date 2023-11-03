import { ValidationError } from '../../Errors/ValidationError'
import getUserByEmail from '../../dao/mongo/getUserByEmail.js'

async function apiGetProfil(req, res) {
  try {
    const { email } = req.query
    const profil = await getUserByEmail(email)

    return res.json({ profil })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiGetProfil
