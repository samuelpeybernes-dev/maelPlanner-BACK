import Joi from 'joi'

const scheduleJobSchema = Joi.object({
  id: Joi.number().min(0).max(999999999),
  newStart: Joi.date().iso(),
  newEnd: Joi.date().iso(),
  newText: Joi.string()
    .regex(/^[a-zA-ZÀ-ÿ0-9\s'-.?!]+$/u)
    .min(1)
    .max(50),
  newBackColor: Joi.string(),
  newBorderColor: Joi.string(),
})

export default scheduleJobSchema
