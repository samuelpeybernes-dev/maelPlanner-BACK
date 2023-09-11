import { ValidationError } from '../../Errors/ValidationError'
import deleteScheduleJob from '../../dao/mongo/deleteScheduleJob.js'

async function apiDeleteScheduleJob(req, res) {
  try {
    if (!req.query.hasOwnProperty('id')) throw new ValidationError('Please send an schedule id to delete ')
    const scheduleId = req.query.id
    const scheduleJob = await deleteScheduleJob(scheduleId)

    return res.json({ scheduleJob })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiDeleteScheduleJob
