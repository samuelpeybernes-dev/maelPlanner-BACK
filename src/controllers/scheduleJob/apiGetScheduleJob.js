import { ValidationError } from '../../Errors/ValidationError'
import getScheduleJob from '../../dao/mongo/getScheduleJob.js'

async function apiGetScheduleJob(req, res) {
  try {
    const scheduleJob = await getScheduleJob()
   

    return res.json({ scheduleJob })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiGetScheduleJob
