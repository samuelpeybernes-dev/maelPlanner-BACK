import Joi from 'joi'

const hoursSubjectSchema = Joi.array().items(
  Joi.object({
    id: Joi.string(),
    newText: Joi.string()
      .regex(/^[a-zA-ZÀ-ÿ0-9\s'-.?!]+$/u)
      .min(1)
      .max(50),
    newWeekHours: Joi.number(),
    newBorderColor: Joi.string().required(),
    newBackColor: Joi.string().required(),
  })
)

export default hoursSubjectSchema
