import { endOfMonth } from 'date-fns'
import DateUtils from './DateUtils'

function getBeginningAndEndingOfMonthsInAYear(year) {
  const beginningAndEndingOfMonthsInYear = []

  for (let month = 0; month < 12; month++) {
    const startDayOfMonth = DateUtils.getDateWithCorrectedTimeZone(new Date(year, month, 1))
    const endDayOfMonth = DateUtils.getDateWithCorrectedTimeZone(endOfMonth(startDayOfMonth))
    const monthNameLowercase = startDayOfMonth.toLocaleDateString('fr-FR', { month: 'long' })
    const monthName = monthNameLowercase.charAt(0).toUpperCase() + monthNameLowercase.slice(1)
    beginningAndEndingOfMonthsInYear.push({ monthName, startDayOfMonth, endDayOfMonth })
  }

  return beginningAndEndingOfMonthsInYear
}

export default getBeginningAndEndingOfMonthsInAYear
