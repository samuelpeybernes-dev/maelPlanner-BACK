import mongoose from 'mongoose'
const { Schema } = mongoose

const projectNotesPersonalizationSchema = new Schema(
  {
    empUsername: { type: String, required: true }, //* la personne qui fait l'action
    priorities: {
      type: [{ priorityId: Number, label: String, color: String }],
      required: true,
    },
  },
  {
    collection: 'projectNotesPersonalization',
    versionKey: false,
  }
)

const ProjectNotesPersonalization = mongoose.model('projectNotesPersonalization', projectNotesPersonalizationSchema)

export default ProjectNotesPersonalization
