import mongoose from 'mongoose'
const { Schema } = mongoose

const scheduleJobSchema = new Schema(
  {
    id: String,
    start: String,
    end: String,
    text: String,
    html: String,
    job: Boolean,
    backColor: String,
    borderColor: String,
    user_id: Schema.Types.ObjectId,
  },
  {
    collection: 'scheduleJob',
    versionKey: false,
    required: true,
  }
)

const scheduleJob = mongoose.model('scheduleJob', scheduleJobSchema)

export default scheduleJob
