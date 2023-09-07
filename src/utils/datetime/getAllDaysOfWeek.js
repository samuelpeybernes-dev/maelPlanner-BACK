import { startOfDay, endOfDay, startOfISOWeek, add } from 'date-fns'

// permet de récuperer les lundi et vendredi des 4 dernières semaines
function getAllDaysOfWeek(date) {
  const monday = startOfISOWeek(new Date(date))
  const tuesday = add(monday, { days: 1 })
  const wednesday = add(monday, { days: 2 })
  const thursday = add(monday, { days: 3 })
  const friday = add(monday, { days: 4 })
  const weekDays = [monday, tuesday, wednesday, thursday, friday]
  return weekDays.map(day => getISODayStartAndEndHour(day))
}

function getISODayStartAndEndHour(date = new Date()) {
  return {
    start: startOfDay(date),
    end: endOfDay(date),
  }
}

export default getAllDaysOfWeek
