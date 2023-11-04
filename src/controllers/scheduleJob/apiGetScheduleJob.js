import { ValidationError } from '../../Errors/ValidationError'
import getScheduleJob from '../../dao/mongo/getScheduleJob.js'

async function apiGetScheduleJob(req, res) {
  try {
    const { _id } = req.query
    const scheduleJob = await getScheduleJob(_id)

    return res.json({ scheduleJob })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiGetScheduleJob
