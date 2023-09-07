import { startOfDay, endOfDay } from 'date-fns'

function getISODayStartAndEndHours() {
  const today = new Date()
  return {
    start: startOfDay(today),
    end: endOfDay(today),
  }
}

export default getISODayStartAndEndHours
