import { ValidationError } from '../../Errors/ValidationError'
import getUserByToken from '../../dao/mongo/getUserByToken.js'

async function apiGetProfil(req, res) {
  try {
    const { token } = req.query
    const profil = await getUserByToken(token)

    return res.json({ profil })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiGetProfil
