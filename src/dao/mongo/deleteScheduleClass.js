import scheduleClassSchema from '../../schemas/mongoose/scheduleClassSchema.js'

async function deleteScheduleClass() {
  const schedule = await scheduleClassSchema.remove()
  return schedule
}

export default deleteScheduleClass
