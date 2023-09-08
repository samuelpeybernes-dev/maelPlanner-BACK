import ProjectNotesPersonalization from '../../schemas/mongoose/projectNotesPersonalizationSchema.js'

async function createProjectNotesPersonalization(ProjectNotesPersonalizationJoi) {
  try {
    const { empUsername, newLabel, newColor, priorityId } = ProjectNotesPersonalizationJoi
    const query = { empUsername: empUsername }
    let projectNoteToUpload = {
      empUsername: empUsername,
      priorities: [
        {
          label: newLabel,
          color: newColor,
          priorityId: priorityId,
        },
      ],
    }
    let messageAdded = 'We add an ic '
    const result = await ProjectNotesPersonalization.findOne(query)

    if (result) {
      projectNoteToUpload = result
      const priorityDb = projectNoteToUpload.priorities.findIndex(priority => priority.priorityId === priorityId)
      if (priorityDb < 0) {
        projectNoteToUpload.priorities.push({
          label: newLabel,
          color: newColor,
          priorityId: priorityId,
        })
        messageAdded = 'new priority added'
      } else {
        projectNoteToUpload.priorities[priorityDb].label = newLabel
        messageAdded = 'label updated'
      }
    }

    await ProjectNotesPersonalization.updateOne(query, projectNoteToUpload, {
      new: true,
      upsert: true, // Permet de créer si on ne trouve pas de correspondance
    })
    return messageAdded
  } catch (error) {
    console.error(error)
  }
}
export default createProjectNotesPersonalization
