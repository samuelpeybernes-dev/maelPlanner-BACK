import Joi from 'joi'

const projectNotePersonalizationSchema = Joi.object({
  empUsername: Joi.string()
    .regex(/^[a-zA-Z0-9-.]+$/)
    .required(),
  priorityId: Joi.number().min(0).max(999999999),
  newLabel: Joi.string()
    .regex(/^[a-zA-ZÀ-ÿ0-9\s'-.?!]+$/u)
    .min(1)
    .max(50),
  newColor: Joi.string(),
})

export default projectNotePersonalizationSchema
