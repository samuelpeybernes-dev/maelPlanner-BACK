import hoursSubjectSchema from '../../schemas/mongoose/hoursSubjectSchema.js'

async function deleteHoursSubject(id) {
  const subject = await hoursSubjectSchema.findOneAndRemove({ _id: id })
  return subject
}

export default deleteHoursSubject
