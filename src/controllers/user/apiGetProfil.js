import { ValidationError } from '../../Errors/ValidationError'
import getUserById from '../../dao/mongo/getUserById.js'

async function apiGetProfil(req, res) {
  try {
    const { _id } = req.query
    const profil = await getUserById(_id)

    return res.json({ profil })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiGetProfil
