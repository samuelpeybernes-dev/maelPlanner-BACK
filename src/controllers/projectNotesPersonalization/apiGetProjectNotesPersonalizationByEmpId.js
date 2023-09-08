import { ValidationError } from '../../Errors/ValidationError'
import getProjectsNotesPersonalizationByEmpId from '../../dao/mongo/getProjectsNotesPersonalizationByEmpUsername.js'

async function apiGetProjectNotesPersonalizationByEmpId(req, res) {
  try {
    if (!req.query.hasOwnProperty('id')) throw new ValidationError('Please send an emp id 💋💋💋')
    const userId = req.query.id
    const projectNotesPersonalization = await getProjectsNotesPersonalizationByEmpId(userId)

    return res.json({ projectNotesPersonalization })
  } catch (error) {
    if (error instanceof ValidationError) return res.status(400).json({ message: error.message })

    res.status(500).json({ message: 'internal server error' })

    return console.error(error)
  }
}

export default apiGetProjectNotesPersonalizationByEmpId
