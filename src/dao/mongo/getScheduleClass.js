import scheduleClassSchema from '../../schemas/mongoose/scheduleClassSchema.js'
import mongoose from 'mongoose'
async function getScheduleClass(user_id) {
  const schedule = await scheduleClassSchema.aggregate([
    {
      $match: {
        user_id: mongoose.Types.ObjectId(user_id),
      },
    },
    {
      $lookup: {
        from: 'hoursSubject',
        localField: 'subject_id',
        foreignField: '_id',
        as: 'subject',
      },
    },
    { $unset: 'user_id' },
  ])

  return schedule
}

export default getScheduleClass
