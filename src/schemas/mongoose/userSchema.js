import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    maxEventHoursPerDay: Number,
    lunchBreakStartHour: Number,
    lunchBreakEndHour: Number,
    startHour: Number,
  },
  {
    collection: 'user',
    versionKey: false,
    required: true,
  }
)

const user = mongoose.model('user', userSchema)

export default user
