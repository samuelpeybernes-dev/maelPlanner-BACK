import * as joiSchemas from '../schemas/joi'

async function validateIncomingData(req, res, next) {
  try {
    const incomingDataName = Object.keys(req.body)
    if (incomingDataName.length === 0) {
      const error = "You're not sending any data."
      console.error(incomingDataName)
      return res.status(400).json({ error })
    }
    if (incomingDataName.length > 1) {
      const error = "You're sending too many data. Please just send one."
      console.error(incomingDataName)
      return res.status(400).json({ error })
    }

    const dataName = incomingDataName[0]
    //* On se sert du nom de l'objet pour trouver le schema Joi correspondant
    if (!joiSchemas.hasOwnProperty(dataName)) {
      const error = "You're sending the wrong type of data."
      console.error(incomingDataName)
      return res.status(400).json({ error })
    }

    const incomingData = req.body[dataName]
    const schema = joiSchemas[dataName]

    const validData = await schema.validateAsync(incomingData)
    req.data = validData
    return next()
  } catch (error) {
    if (error.hasOwnProperty('message')) {
      const errorToSend = error.message
      console.error(error)
      return res.status(400).json({ error: errorToSend })
    }
    return console.error(error)
  }
}

export default validateIncomingData
