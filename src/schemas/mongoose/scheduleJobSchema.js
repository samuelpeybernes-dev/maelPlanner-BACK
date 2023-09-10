import mongoose from 'mongoose'
const { Schema } = mongoose

const scheduleJobSchema = new Schema(
  {
    id: Number, 
    start: Date, 
    end: Date, 
    text: String, 
    backColor: String, 
    borderColor: String 
  },
  {
    collection: 'scheduleJob',
    versionKey: false,
    required: true,
  }
)

const scheduleJob = mongoose.model('scheduleJob', scheduleJobSchema)

export default scheduleJob
