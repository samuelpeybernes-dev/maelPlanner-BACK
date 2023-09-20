"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function convertHHmmssToSeconds(time) {
    const [hours, minutes, seconds] = time.split(':');
    return (0, date_fns_1.hoursToSeconds)(parseInt(hours)) + (0, date_fns_1.minutesToSeconds)(parseInt(minutes)) + parseInt(seconds);
}
exports.default = convertHHmmssToSeconds;
//# sourceMappingURL=convertHHmmssToSeconds.js.map