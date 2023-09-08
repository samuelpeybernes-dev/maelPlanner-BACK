import scheduleJobSchema from '../../schemas/mongoose/scheduleJobSchema.js'

async function getScheduleJob(id) {
  const schedule = await scheduleJobSchema.find({ id })
  return schedule
}

export default getScheduleJob
