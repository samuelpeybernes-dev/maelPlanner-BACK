import { ValidationError } from '../../Errors/ValidationError'
import deleteHoursSubject from '../../dao/mongo/deleteHoursSubject.js'

async function apiDeleteHoursSubject(req, res) {
  try {
    if (!req.query.hasOwnProperty('id')) throw new ValidationError('Please send an subject id to delete ')
    const id = req.query.id
    const subject = await deleteHoursSubject(id)

    return res.json({ subject })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiDeleteHoursSubject
