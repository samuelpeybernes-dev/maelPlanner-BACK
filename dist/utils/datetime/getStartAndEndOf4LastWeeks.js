"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const add_1 = __importDefault(require("date-fns/add"));
// permet de récuperer les lundi et vendredi des 4 dernières semaines
function getStartAndEndOf4LastWeeks(date) {
    // On reviens 4 semaines en arrières
    const firstDayOfFirstWeek = (0, add_1.default)(date, { weeks: -4 });
    // On trouve les lundi et les vendredi des 4 semaines
    const firstMondayOfFirstWeek = (0, date_fns_1.nextMonday)(firstDayOfFirstWeek);
    const firstFridayOfFirstWeek = (0, date_fns_1.nextFriday)(firstMondayOfFirstWeek);
    const dates = [];
    let friday = firstFridayOfFirstWeek;
    let monday = firstMondayOfFirstWeek;
    dates.push(monday, friday);
    for (let i = 0; i < 3; i++) {
        monday = (0, date_fns_1.nextMonday)(monday);
        friday = (0, date_fns_1.nextFriday)(friday);
        dates.push(monday, friday);
    }
    return dates;
}
exports.default = getStartAndEndOf4LastWeeks;
//# sourceMappingURL=getStartAndEndOf4LastWeeks.js.map