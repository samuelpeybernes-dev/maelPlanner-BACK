import Joi from 'joi'

const scheduleJobSchema = Joi.object({
  id: Joi.string().required(),
  newStart: Joi.string().required(),
  newEnd: Joi.string().required(),
  newText: Joi.string()
    .regex(/^[a-zA-ZÀ-ÿ0-9\s'-.?!]+$/u)
    .min(1)
    .max(50),
  newHtml: Joi.string(),
  newJob: Joi.boolean().required(),
  newBackColor: Joi.string(),
  newBorderColor: Joi.string(),
})

export default scheduleJobSchema
