"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
// permet de récuperer les lundi et vendredi des 4 dernières semaines
function getAllDaysOfWeek(date) {
    const monday = (0, date_fns_1.startOfISOWeek)(new Date(date));
    const tuesday = (0, date_fns_1.add)(monday, { days: 1 });
    const wednesday = (0, date_fns_1.add)(monday, { days: 2 });
    const thursday = (0, date_fns_1.add)(monday, { days: 3 });
    const friday = (0, date_fns_1.add)(monday, { days: 4 });
    const weekDays = [monday, tuesday, wednesday, thursday, friday];
    return weekDays.map(day => getISODayStartAndEndHour(day));
}
function getISODayStartAndEndHour(date = new Date()) {
    return {
        start: (0, date_fns_1.startOfDay)(date),
        end: (0, date_fns_1.endOfDay)(date),
    };
}
exports.default = getAllDaysOfWeek;
//# sourceMappingURL=getAllDaysOfWeek.js.map