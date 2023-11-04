import createUpdateScheduleJob from '../../dao/mongo/createUpdateScheduleJob'

async function apiPostScheduleJob(req, res) {
  try {
    const { scheduleJobJoi } = req.body
    const { _id } = req.query
    const scheduleJob = await createUpdateScheduleJob(_id, scheduleJobJoi)

    return res.status(200).json({ message: 'ok ' + scheduleJob })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default apiPostScheduleJob
