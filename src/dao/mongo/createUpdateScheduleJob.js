import ProjectNote from '../../schemas/mongoose/projectNoteSchema.js'

async function createUpdateScheduleJob(projectNote) {
  try {
    const result = await ProjectNote.findOneAndUpdate({ id: projectNote.projectId }, projectNote, {
      new: true,
      upsert: true, // Permet de créer si on ne trouve pas de correspondance
    })
    return result
  } catch (error) {
    console.error(error)
  }
}
export default createUpdateScheduleJob
