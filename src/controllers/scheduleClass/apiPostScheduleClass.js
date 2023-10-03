import createUpdateScheduleClass from '../../dao/mongo/createUpdateScheduleClass.js'

async function apiPostScheduleClass(req, res) {
  try {
    const { scheduleClassJoi } = req.body
    const scheduleClass = await createUpdateScheduleClass(scheduleClassJoi)

    return res.status(200).json({ message: 'ok ', data : scheduleClass })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default apiPostScheduleClass
