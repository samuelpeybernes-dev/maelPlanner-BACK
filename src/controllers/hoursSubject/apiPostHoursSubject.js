import createUpdateHoursSubject from '../../dao/mongo/createUpdateHoursSubject.js'

async function apiPostHoursSubject(req, res) {
  try {
    const { hoursSubjectJoi } = req.body
    const { _id } = req.query
    const hoursSubject = await createUpdateHoursSubject(_id, hoursSubjectJoi)
    if (hoursSubject instanceof Error) return res.status(500).json({ error: hoursSubject.message })
    return res.status(200).json({ message: 'ok ', data: hoursSubject })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default apiPostHoursSubject
