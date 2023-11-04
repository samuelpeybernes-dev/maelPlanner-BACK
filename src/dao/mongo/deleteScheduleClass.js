import scheduleClassSchema from '../../schemas/mongoose/scheduleClassSchema.js'

async function deleteScheduleClass(user_id, startDate, endDate) {
  const deletedSchedule = await scheduleClassSchema.deleteMany({
    user_id: user_id,
    start: {
      $gte: startDate,
    },
    end: {
      $lte: endDate,
    },
  })

  return deletedSchedule
}

export default deleteScheduleClass
