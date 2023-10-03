import Joi from 'joi'

const scheduleClassSchema = Joi.array().items(Joi.object({
  id: Joi.string().required(),
  newStart: Joi.string().required(),
  newEnd: Joi.string().required(),
  newText: Joi.string()
    .regex(/^[a-zA-ZÀ-ÿ0-9\s'-.?!]+$/u)
    .min(1)
    .max(50),
  newHtml: Joi.string(),
  subject_id: Joi.string().required(),
}));

export default scheduleClassSchema
