"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const DateUtils_js_1 = __importDefault(require("./DateUtils.js"));
// !ça ne fonctionne pas en ISO ptdr
function getISO52LastWeeks() {
    const result = [];
    let datePointer = new Date();
    for (let i = 52; i > 0; i--) {
        datePointer = (0, date_fns_1.sub)(datePointer, { weeks: 1 });
        const year = datePointer.getFullYear();
        const weekNumber = (0, date_fns_1.getISOWeek)(datePointer);
        const { monday, friday } = DateUtils_js_1.default.getWorkingWeekStartAndEndDaysInString(year, weekNumber);
        result.push({ year, weekNumber, monday, friday });
    }
    return result;
}
exports.default = getISO52LastWeeks;
//# sourceMappingURL=getISO52LastWeeks.js.map