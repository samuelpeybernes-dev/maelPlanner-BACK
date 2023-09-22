import { ValidationError } from '../../Errors/ValidationError'
import deleteScheduleClass from '../../dao/mongo/deleteScheduleClass.js'

async function apiDeleteScheduleClass(req, res) {
  try {
    const scheduleClass = await deleteScheduleClass()

    return res.json({ scheduleClass })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiDeleteScheduleClass
