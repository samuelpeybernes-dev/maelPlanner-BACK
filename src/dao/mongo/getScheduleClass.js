import scheduleClassSchema from '../../schemas/mongoose/scheduleClassSchema.js'

async function getScheduleClass() {
  const schedule = await scheduleClassSchema.aggregate().lookup({
    from: 'hoursSubject',
    localField: 'subject_id',
    foreignField: '_id',
    as: 'subject'
  })
  return schedule
}

export default getScheduleClass


