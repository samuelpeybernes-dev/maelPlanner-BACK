import hoursSubjectSchema from '../../schemas/mongoose/hoursSubjectSchema.js'

async function getHoursSubject() {
  const schedule = await hoursSubjectSchema.find()
  return schedule
}

export default getHoursSubject
