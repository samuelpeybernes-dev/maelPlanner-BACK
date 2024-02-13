import mongoose from 'mongoose'
const { Schema } = mongoose

const tokenSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    token: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 3600, // 
    },
  },
  {
    collection: 'tokens',
    versionKey: false,
    required: true,
  }
)

const tokens = mongoose.model('tokens', tokenSchema)

export default tokens
