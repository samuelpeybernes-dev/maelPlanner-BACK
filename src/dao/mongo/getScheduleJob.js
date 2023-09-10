import scheduleJobSchema from '../../schemas/mongoose/scheduleJobSchema.js'

async function getScheduleJob() {
  const schedule = await scheduleJobSchema.find()
  return schedule
}

export default getScheduleJob
