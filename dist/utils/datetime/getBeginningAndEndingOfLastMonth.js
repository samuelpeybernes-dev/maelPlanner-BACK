"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const DateUtils_1 = __importDefault(require("./DateUtils"));
function getBeginningAndEndingOfLastMonth() {
    const today = new Date();
    const lastMonthDate = (0, date_fns_1.sub)(today, { months: 1 });
    const startDayOfMonth = DateUtils_1.default.getDateWithCorrectedTimeZone(new Date(lastMonthDate.getFullYear(), lastMonthDate.getMonth(), 1));
    const endDayOfMonth = DateUtils_1.default.getDateWithCorrectedTimeZone((0, date_fns_1.endOfMonth)(startDayOfMonth));
    return { startDayOfMonth, endDayOfMonth };
}
exports.default = getBeginningAndEndingOfLastMonth;
//# sourceMappingURL=getBeginningAndEndingOfLastMonth.js.map