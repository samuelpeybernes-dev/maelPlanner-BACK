"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
/**
 ** Convertit un nombre de secondes vers un format hh:mm:ss
 * @param {number} seconds
 * @returns hh:mm:ss
 */
function convertSecondsToHHmmss(secondsInput) {
    if (!secondsInput)
        return '00:00:00';
    const start = new Date(0);
    const end = new Date(secondsInput * 1000); // converting seconds to milliseconds
    let duration = { days: undefined, hours: undefined, minutes: undefined, seconds: undefined };
    try {
        duration = (0, date_fns_1.intervalToDuration)({ start, end });
    }
    catch (e) {
        console.log('secondsInput', secondsInput);
        console.log('start', start);
        console.log('end', end);
    }
    const hours = ((duration.days || 0) * 24 + (duration.hours || 0)).toString().padStart(2, '0');
    const minutes = (duration.minutes || 0).toString().padStart(2, '0');
    const seconds = (duration.seconds || 0).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
exports.default = convertSecondsToHHmmss;
//# sourceMappingURL=convertSecondsToHHmmss.js.map