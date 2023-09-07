import { endOfMonth, sub } from 'date-fns'
import DateUtils from './DateUtils'

function getBeginningAndEndingOfLastMonth() {
  const today = new Date()
  const lastMonthDate = sub(today, { months: 1 })
  const startDayOfMonth = DateUtils.getDateWithCorrectedTimeZone(new Date(lastMonthDate.getFullYear(), lastMonthDate.getMonth(), 1))
  const endDayOfMonth = DateUtils.getDateWithCorrectedTimeZone(endOfMonth(startDayOfMonth))
  return { startDayOfMonth, endDayOfMonth }
}

export default getBeginningAndEndingOfLastMonth
