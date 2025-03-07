import { ValidationError } from '../../Errors/ValidationError'
import getScheduleClass from '../../dao/mongo/getScheduleClass.js'

async function apiGetScheduleClass(req, res) {
  try {
    const { _id } = req.query
    const scheduleClass = await getScheduleClass(_id)

    return res.json({ scheduleClass })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiGetScheduleClass
