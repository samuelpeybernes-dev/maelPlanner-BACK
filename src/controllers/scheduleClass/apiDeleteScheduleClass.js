import { ValidationError } from '../../Errors/ValidationError'
import deleteScheduleClass from '../../dao/mongo/deleteScheduleClass.js'

async function apiDeleteScheduleClass(req, res) {
  try {
    const { _id } = req.query
    const startDate = req.query.start
    const endDate = req.query.end
    const scheduleClass = await deleteScheduleClass(_id, startDate, endDate)

    return res.json({ scheduleClass })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiDeleteScheduleClass
