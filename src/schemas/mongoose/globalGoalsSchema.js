import mongoose from 'mongoose'
const { Schema } = mongoose

/**
 * On garde ce fichier comme exemple. Une fois qu'on aura repliqué en y mettant la bonne logique
 * et les bonnes valeurs, on pourra supprimer ce fichier (globalGoalsSchema)
 */

const globalGoalsSchema = new Schema(
  {
    date: Object, //* Contient l'année et le mois (en nombre à partir de zéro) de l'objectif
    lastEdit: Date, //* date de la dernière édition
    lastEditor: String, //* Prénom Nom du dernier éditeur
    globalGoal: Number, //* le goal global de compufirst pour 1 mois
    team: String, //* L'équipe concernée par ce goal, ça peut être acq, dev ou compufirst
  },
  {
    collection: 'globalGoals',
    versionKey: false,
  }
)

const globalGoals = mongoose.model('globalGoals', globalGoalsSchema)

export default globalGoals
