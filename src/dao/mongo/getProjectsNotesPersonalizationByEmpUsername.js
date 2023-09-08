import ProjectNotesPersonalization from '../../schemas/mongoose/projectNotesPersonalizationSchema.js'

async function getProjectsNotesPersonalizationByEmpUsername(empUsername) {
  const projects = await ProjectNotesPersonalization.find({ empUsername })
  return projects
}

export default getProjectsNotesPersonalizationByEmpUsername
