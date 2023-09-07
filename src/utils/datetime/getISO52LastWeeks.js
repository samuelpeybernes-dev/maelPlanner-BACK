import { getISOWeek, sub } from 'date-fns'
import DateUtils from './DateUtils.js'

// !ça ne fonctionne pas en ISO ptdr
function getISO52LastWeeks() {
  const result = []
  let datePointer = new Date()
  for (let i = 52; i > 0; i--) {
    datePointer = sub(datePointer, { weeks: 1 })
    const year = datePointer.getFullYear()
    const weekNumber = getISOWeek(datePointer)
    const { monday, friday } = DateUtils.getWorkingWeekStartAndEndDaysInString(year, weekNumber)
    result.push({ year, weekNumber, monday, friday })
  }
  return result
}

export default getISO52LastWeeks
