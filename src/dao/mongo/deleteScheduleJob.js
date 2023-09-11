import scheduleJobSchema from '../../schemas/mongoose/scheduleJobSchema.js'

async function deleteScheduleJob(id) {
  const schedule = await scheduleJobSchema.findOneAndRemove({ id })
  return schedule
}

export default deleteScheduleJob
