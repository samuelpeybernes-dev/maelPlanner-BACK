"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function getWeekOfCurrentMonth() {
    const today = new Date();
    return {
        weekOfMonth: (0, date_fns_1.getWeekOfMonth)(today),
    };
}
exports.default = getWeekOfCurrentMonth;
//# sourceMappingURL=getWeekOfCurrentMonth.js.map