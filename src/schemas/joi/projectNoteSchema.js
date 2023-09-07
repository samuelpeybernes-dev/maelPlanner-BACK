import Joi from 'joi'

/**
 * On garde ce fichier comme exemple. Une fois qu'on aura repliqué en y mettant la bonne logique
 * et les bonnes valeurs, on pourra supprimer ce fichier (projectNoteSchema)
 */

const projectNoteSchema = Joi.object({
  projectId: Joi.number().min(0).max(999999999).required(),
  empUsername: Joi.string()
    .regex(/^[a-z0-9-]+$/)
    .required(),
  priorityId: Joi.number().min(0).max(999999999),
  isFavorite: Joi.boolean(),
})

export default projectNoteSchema
