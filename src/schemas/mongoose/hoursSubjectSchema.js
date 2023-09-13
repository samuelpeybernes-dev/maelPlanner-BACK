import mongoose from 'mongoose'
const { Schema } = mongoose

const hoursSubjectSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    text: String,
    weekHours: Number,
    backColor: String,
    borderColor: String
  },
  {
    collection: 'hoursSubject',
    versionKey: false,
    required: true,
  }
)

const hoursSubject = mongoose.model('hoursSubject', hoursSubjectSchema)


export default hoursSubject
