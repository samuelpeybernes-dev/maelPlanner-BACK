import mongoose from 'mongoose'
import hoursSubject from '../../schemas/mongoose/hoursSubjectSchema.js'
import user from '../../schemas/mongoose/userSchema.js'

async function createUpdateHoursSubject(user_id, hoursSubjectJoi) {
  try {
    const correspondingUser = await user.findById(user_id)
    if (!correspondingUser || undefined) {
      throw new Error('User not found for id:' + user_id)
    }
    let updatedSubjects = []
    for (const hoursSubjectItem of hoursSubjectJoi) {
      const { id, newText, newBackColor, newBorderColor, newWeekHours } = hoursSubjectItem
      console.log('🚀 ~ createUpdateHoursSubject ~ hoursSubjectItem:', hoursSubjectItem)

      const existingHoursSubject = await hoursSubject.findById(id)

      if (existingHoursSubject) {
        // Le document existe, vous pouvez mettre à jour ses propriétés ici
        existingHoursSubject.text = newText
        existingHoursSubject.backColor = newBackColor
        existingHoursSubject.borderColor = newBorderColor
        existingHoursSubject.weekHours = newWeekHours
        existingHoursSubject.user_id = correspondingUser._id

        // Mettre à jour le document dans la base de données
        await existingHoursSubject.save()
        console.log('Hours subject updated for id:', id)
        updatedSubjects.push(existingHoursSubject)
      } else {
        // Le document n'existe pas, vous pouvez en créer un nouveau ici
        const newHoursSubject = new hoursSubject({
          text: newText,
          backColor: newBackColor,
          borderColor: newBorderColor,
          weekHours: newWeekHours,
          user_id: correspondingUser._id,
        })

        // Enregistrer le nouveau document dans la base de données
        await newHoursSubject.save()
        console.log('New Hours subject created for id:', id)
        updatedSubjects.push(newHoursSubject)
      }
    }
    return updatedSubjects
  } catch (error) {
    return error
  }
}

export default createUpdateHoursSubject
