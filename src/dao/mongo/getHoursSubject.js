import hoursSubjectSchema from '../../schemas/mongoose/hoursSubjectSchema.js'

async function getHoursSubject(user_id) {
  const schedule = await hoursSubjectSchema.find(
    { user_id },
    {
      user_id: 0,
    }
  )
  return schedule
}

export default getHoursSubject
