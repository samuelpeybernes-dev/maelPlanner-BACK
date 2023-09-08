import createScheduleJob from '../../dao/mongo/createScheduleJob'

async function apiPostScheduleJob(req, res) {
  try {
    const { scheduleJobJoi } = req.body
    const scheduleJob = await createScheduleJob(scheduleJobJoi)

    return res.status(200).json({ message: 'ok ' + scheduleJob })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default apiPostScheduleJob
