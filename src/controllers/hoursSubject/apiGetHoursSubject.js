import { ValidationError } from '../../Errors/ValidationError'
import getHoursSubject from '../../dao/mongo/getHoursSubject.js'

async function apiGetHoursSubject(req, res) {
  try {
    const hoursSubject = await getHoursSubject()
   

    return res.json({ hoursSubject })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiGetHoursSubject
