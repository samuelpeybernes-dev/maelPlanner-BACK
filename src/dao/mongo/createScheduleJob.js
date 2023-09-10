import scheduleJob from '../../schemas/mongoose/scheduleJobSchema.js'

async function createScheduleJob(scheduleJobJoi) {
  try {
    const { id, newStart, newEnd, newText, newBackColor, newBorderColor: newBorderColor } = scheduleJobJoi
    const query = { id: id }

    // Rechercher le document avec le même 'id'
    const existingScheduleJob = await scheduleJob.findOne(query)

    if (existingScheduleJob) {
      // Le document existe, vous pouvez mettre à jour ses propriétés ici
      existingScheduleJob.start = newStart
      existingScheduleJob.end = newEnd
      existingScheduleJob.text = newText
      existingScheduleJob.backColor = newBackColor
      existingScheduleJob.borderColor = newBorderColor

      // Mettre à jour le document dans la base de données
      await existingScheduleJob.save()
      return 'schedule job updated'
    } else {
      // Le document n'existe pas, vous pouvez en créer un nouveau ici
      const newScheduleJob = new scheduleJob({
        id: id,
        start: newStart,
        end: newEnd,
        text: newText,
        backColor: newBackColor,
        borderColor: newBorderColor,
      })

      // Enregistrer le nouveau document dans la base de données
      await newScheduleJob.save()
      return 'schedule job created'
    }
  } catch (error) {
    console.error(error)
  }
}
export default createScheduleJob
