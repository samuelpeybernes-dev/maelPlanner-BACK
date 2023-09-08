import mongoose from 'mongoose'
const { Schema } = mongoose

const scheduleJobSchema = new Schema(
  {
    priorities: {
      type: [
        { 
        id: Number, 
        start: Date, 
        end: Date, 
        text: String, 
        backColor: String, 
        borderColor: String 
        }
      ],
      required: true,
    },
  },
  {
    collection: 'scheduleJob',
    versionKey: false,
  }
)

const scheduleJob = mongoose.model('scheduleJob', scheduleJobSchema)

export default scheduleJob
