import scheduleJob from '../../schemas/mongoose/scheduleJobSchema.js'

async function createUpdateScheduleJob(scheduleJobJoi) {
  try {
    const { id, newStart, newEnd, newText, newHtml, newJob, newBackColor, newBorderColor } = scheduleJobJoi
    const query = { id: id }

    // Rechercher le document avec le même 'id'
    const existingScheduleJob = await scheduleJob.findOne(query)

    if (existingScheduleJob) {
      // Le document existe, vous pouvez mettre à jour ses propriétés ici
      existingScheduleJob.start = newStart
      existingScheduleJob.end = newEnd
      existingScheduleJob.text = newText
      existingScheduleJob.html = newHtml
      existingScheduleJob.job = newJob
      existingScheduleJob.backColor = newBackColor
      existingScheduleJob.borderColor = newBorderColor

      // Mettre à jour le document dans la base de données
      await existingScheduleJob.save()
      return 'schedule job updated'
    } else {
      // Le document n'existe pas, vous pouvez en créer un nouveau ici
      // eslint-disable-next-line new-cap
      const newScheduleJob = new scheduleJob({
        id: id,
        start: newStart,
        end: newEnd,
        text: newText,
        job: newJob,
        html: newHtml,
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
export default createUpdateScheduleJob
