"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scheduleClassSchema_js_1 = __importDefault(require("../../schemas/mongoose/scheduleClassSchema.js"));
async function getScheduleClass() {
    const schedule = await scheduleClassSchema_js_1.default.aggregate().lookup({
        from: 'hoursSubject',
        localField: 'subject_id',
        foreignField: '_id',
        as: 'subject'
    });
    return schedule;
}
exports.default = getScheduleClass;
//# sourceMappingURL=getScheduleClass.js.map