import mongoose from 'mongoose'
const { Schema } = mongoose

const scheduleJobSchema = new Schema(
  {
    id: String, 
    start: String, 
    end: String, 
    text: String, 
    job: Boolean,
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
