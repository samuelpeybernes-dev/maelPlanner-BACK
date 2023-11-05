import Joi from 'joi'

const userSchema = Joi.object({
  firstName: Joi.string(),
  name: Joi.string(),
  password: Joi.string(),
  email: Joi.string().email(),
  maxEventHoursPerDay: Joi.number(),
  lunchBreakStartHour: Joi.number(),
  lunchBreakEndHour: Joi.number(),
  startHour: Joi.number(),
})

export default userSchema
