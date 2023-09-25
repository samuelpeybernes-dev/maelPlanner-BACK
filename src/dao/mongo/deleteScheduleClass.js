import scheduleClassSchema from '../../schemas/mongoose/scheduleClassSchema.js'

async function deleteScheduleClass(startDate, endDate) {
  const deletedSchedule = await scheduleClassSchema.deleteMany({
    start: {
      $gte: startDate,
    },
    end: {
      $lte: endDate,
    },
  });

  return deletedSchedule;
}

export default deleteScheduleClass
