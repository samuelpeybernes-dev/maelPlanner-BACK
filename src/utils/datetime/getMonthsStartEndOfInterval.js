import { startOfMonth, endOfMonth, sub } from 'date-fns'

// function get12LastMonths() {
//   const result = []
//   const today = new Date()
//   let firstDayOfThisMonth = startOfMonth(today)
//   for (let i = 0; i < 12; i++) {
//     const startFirstWeekOfMonth = startOfMonth(firstDayOfThisMonth)
//     const endFirstWeekOfMonth = endOfMonth(firstDayOfThisMonth)
//     firstDayOfThisMonth = sub(firstDayOfThisMonth, { months: 1 })
//     result.push({ startFirstWeekOfMonth, endFirstWeekOfMonth })
//   }

//   return result
// }

function getMonthsStartEndOfInterval(eachMonths) {
  const result = []
  const endMonth = eachMonths.pop()
  let firstDayOfThisMonth = startOfMonth(endMonth)
  for (let i = 0; i <= eachMonths.length; i++) {
    const startFirstWeekOfMonth = startOfMonth(firstDayOfThisMonth)
    const endFirstWeekOfMonth = endOfMonth(firstDayOfThisMonth)
    firstDayOfThisMonth = sub(firstDayOfThisMonth, { months: 1 })
    result.push({ startFirstWeekOfMonth, endFirstWeekOfMonth })
  }

  return result
}

export default getMonthsStartEndOfInterval
