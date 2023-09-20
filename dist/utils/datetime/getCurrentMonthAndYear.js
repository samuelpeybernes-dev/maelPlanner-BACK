"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function getCurrentMonthAndYear() {
    const today = new Date();
    return {
        startCurrentMonth: (0, date_fns_1.startOfMonth)(today),
        endCurrentMonth: (0, date_fns_1.lastDayOfMonth)(today),
    };
}
exports.default = getCurrentMonthAndYear;
//# sourceMappingURL=getCurrentMonthAndYear.js.map