import scheduleJob from '../../schemas/mongoose/scheduleJobSchema.js'

async function createScheduleJob(scheduleJobJoi) {
  try {
    const { id, newStart, newEnd, newText, newBackColor, newborderColor: newBorderColor } = scheduleJobJoi
    const query = { id: id }
    let scheduleJobToUpload = {
      id: id,
      priorities: [
        {
          start: newStart,
          end: newEnd,
          text: newText,
          backColor: newBackColor,
          borderColor: newBorderColor,
        },
      ],
    }
    let messageAdded = 'We add an ic '
    const result = await scheduleJob.findOne(query)

    if (result) {
      scheduleJobToUpload = result
      const priorityDb = scheduleJobToUpload.priorities.findIndex(priority => priority.id === id)
      if (priorityDb < 0) {
        scheduleJobToUpload.priorities.push({
          start: newStart,
          end: newEnd,
          text: newText,
          backColor: newBackColor,
          borderColor: newBorderColor,
        })
        messageAdded = 'new priority added'
      } else {
        scheduleJobToUpload.priorities[priorityDb].schedule = newSchedule
        messageAdded = 'label updated'
      }
    }

    await scheduleJob.updateOne(query, scheduleJobToUpload, {
      new: true,
      upsert: true, // Permet de créer si on ne trouve pas de correspondance
    })
    return messageAdded
  } catch (error) {
    console.error(error)
  }
}
export default createScheduleJob
