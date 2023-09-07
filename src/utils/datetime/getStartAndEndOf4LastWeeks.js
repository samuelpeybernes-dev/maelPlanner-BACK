import { nextFriday, nextMonday } from 'date-fns'
import add from 'date-fns/add'

// permet de récuperer les lundi et vendredi des 4 dernières semaines
function getStartAndEndOf4LastWeeks(date) {
  // On reviens 4 semaines en arrières
  const firstDayOfFirstWeek = add(date, { weeks: -4 })
  // On trouve les lundi et les vendredi des 4 semaines
  const firstMondayOfFirstWeek = nextMonday(firstDayOfFirstWeek)
  const firstFridayOfFirstWeek = nextFriday(firstMondayOfFirstWeek)
  const dates = []
  let friday = firstFridayOfFirstWeek
  let monday = firstMondayOfFirstWeek
  dates.push(monday, friday)
  for (let i = 0; i < 3; i++) {
    monday = nextMonday(monday)
    friday = nextFriday(friday)
    dates.push(monday, friday)
  }
  return dates
}

export default getStartAndEndOf4LastWeeks
