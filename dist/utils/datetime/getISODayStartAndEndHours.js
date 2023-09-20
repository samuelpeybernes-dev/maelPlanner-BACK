"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function getISODayStartAndEndHours() {
    const today = new Date();
    return {
        start: (0, date_fns_1.startOfDay)(today),
        end: (0, date_fns_1.endOfDay)(today),
    };
}
exports.default = getISODayStartAndEndHours;
//# sourceMappingURL=getISODayStartAndEndHours.js.map