"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
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
    const result = [];
    const endMonth = eachMonths.pop();
    let firstDayOfThisMonth = (0, date_fns_1.startOfMonth)(endMonth);
    for (let i = 0; i <= eachMonths.length; i++) {
        const startFirstWeekOfMonth = (0, date_fns_1.startOfMonth)(firstDayOfThisMonth);
        const endFirstWeekOfMonth = (0, date_fns_1.endOfMonth)(firstDayOfThisMonth);
        firstDayOfThisMonth = (0, date_fns_1.sub)(firstDayOfThisMonth, { months: 1 });
        result.push({ startFirstWeekOfMonth, endFirstWeekOfMonth });
    }
    return result;
}
exports.default = getMonthsStartEndOfInterval;
//# sourceMappingURL=getMonthsStartEndOfInterval.js.map