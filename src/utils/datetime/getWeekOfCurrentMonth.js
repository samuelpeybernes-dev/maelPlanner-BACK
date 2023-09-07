import { getWeekOfMonth } from 'date-fns'

function getWeekOfCurrentMonth() {
  const today = new Date()
  return {
    weekOfMonth: getWeekOfMonth(today),
  }
}

export default getWeekOfCurrentMonth
