import scheduleClass from '../../schemas/mongoose/scheduleClassSchema.js'
import hoursSubject from '../../schemas/mongoose/hoursSubjectSchema.js'

async function createUpdateScheduleClasses(scheduleClassJoi) {
  try {
    for (const scheduleItem of scheduleClassJoi) {
      const { id, subject_id, newStart, newEnd, newText, newHtml } = scheduleItem

      const correspondingHoursSubject = await hoursSubject.findById(subject_id)

      const existingScheduleClass = await scheduleClass.findOne({ id: id })

      if (!correspondingHoursSubject) {
        console.error('HoursSubject not found for id:', subject_id)
        continue // Skip this item and proceed with the next one.
      }

      if (existingScheduleClass) {
        // Le document existe, vous pouvez mettre à jour ses propriétés ici
        existingScheduleClass.start = newStart
        existingScheduleClass.end = newEnd
        existingScheduleClass.text = newText
        existingScheduleClass.html = newHtml
        existingScheduleClass.subject_id = correspondingHoursSubject._id

        // Mettre à jour le document dans la base de données
        await existingScheduleClass.save()
        console.log('Schedule class updated for id:', id)
      } else {
        // Le document n'existe pas, vous pouvez en créer un nouveau ici
        const newScheduleClass = new scheduleClass({
          id: id,
          start: newStart,
          end: newEnd,
          text: newText,
          html: newHtml,
          subject_id: correspondingHoursSubject._id,
        })

        // Enregistrer le nouveau document dans la base de données
        await newScheduleClass.save()
        console.log('New schedule class created for id:', id)
      }
    }
    return scheduleClassJoi
  } catch (error) {
    console.error(error)
  }
}

export default createUpdateScheduleClasses
