import mongoose from 'mongoose'
const { Schema } = mongoose

const scheduleClassSchema = new Schema(
  {
    id: String, 
    start: String, 
    end: String, 
    text: String, 
    subject_id: Schema.Types.ObjectId,
  },
  {
    collection: 'scheduleClasse',
    versionKey: false,
    required: true,
  }
)

const scheduleClass = mongoose.model('scheduleClasse', scheduleClassSchema)


export default scheduleClass
