import scheduleJobSchema from '../../schemas/mongoose/scheduleJobSchema.js'

async function getScheduleJob(user_id) {
  const schedule = await scheduleJobSchema.find(
    { user_id },
    {
      user_id: 0,
    }
  )
  return schedule
}

export default getScheduleJob
