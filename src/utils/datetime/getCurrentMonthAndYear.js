import { startOfMonth, lastDayOfMonth } from 'date-fns'

function getCurrentMonthAndYear() {
  const today = new Date()
  return {
    startCurrentMonth: startOfMonth(today),
    endCurrentMonth: lastDayOfMonth(today),
  }
}

export default getCurrentMonthAndYear
