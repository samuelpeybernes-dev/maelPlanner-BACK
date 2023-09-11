import Joi from 'joi'

const scheduleJobSchema = Joi.object({
  id: Joi.string(),
  newStart: Joi.string(),
  newEnd: Joi.string(),
  newText: Joi.string()
    .regex(/^[a-zA-ZÀ-ÿ0-9\s'-.?!]+$/u)
    .min(1)
    .max(50),
  newBackColor: Joi.string(),
  newBorderColor: Joi.string(),
})

export default scheduleJobSchema
