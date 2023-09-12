import mongoose from 'mongoose'
const { Schema } = mongoose

const hoursSubjectSchema = new Schema(
  {
    text: String,
  },
  {
    collection: 'hoursSubject',
    versionKey: false,
    required: true,
  }
)

const scheduleClassSchema = new Schema(
  {
    id: String, 
    start: String, 
    end: String, 
    text: String, 
    backColor: String, 
    borderColor: String,
    subject_id: String,
  },
  {
    collection: 'scheduleClasse',
    versionKey: false,
    required: true,
  }
)

const hoursSubject = mongoose.model('hoursSubject', hoursSubjectSchema)
const scheduleClass = mongoose.model('scheduleClass', scheduleClassSchema)


export default {scheduleClass, hoursSubject}
