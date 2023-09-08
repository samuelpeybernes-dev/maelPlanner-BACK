import createProjectNotesPersonalization from '../../dao/mongo/createProjectNotesPersonalization'

async function apiPostProjectNotesPersonalization(req, res) {
  try {
    const { ProjectNotesPersonalizationJoi } = req.body
    const projectNote = await createProjectNotesPersonalization(ProjectNotesPersonalizationJoi)

    return res.status(200).json({ message: 'ok ' + projectNote })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error })
  }
}

export default apiPostProjectNotesPersonalization
