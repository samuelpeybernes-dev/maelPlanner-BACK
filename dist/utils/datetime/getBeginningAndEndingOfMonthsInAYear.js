"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const DateUtils_1 = __importDefault(require("./DateUtils"));
function getBeginningAndEndingOfMonthsInAYear(year) {
    const beginningAndEndingOfMonthsInYear = [];
    for (let month = 0; month < 12; month++) {
        const startDayOfMonth = DateUtils_1.default.getDateWithCorrectedTimeZone(new Date(year, month, 1));
        const endDayOfMonth = DateUtils_1.default.getDateWithCorrectedTimeZone((0, date_fns_1.endOfMonth)(startDayOfMonth));
        const monthNameLowercase = startDayOfMonth.toLocaleDateString('fr-FR', { month: 'long' });
        const monthName = monthNameLowercase.charAt(0).toUpperCase() + monthNameLowercase.slice(1);
        beginningAndEndingOfMonthsInYear.push({ monthName, startDayOfMonth, endDayOfMonth });
    }
    return beginningAndEndingOfMonthsInYear;
}
exports.default = getBeginningAndEndingOfMonthsInAYear;
//# sourceMappingURL=getBeginningAndEndingOfMonthsInAYear.js.map