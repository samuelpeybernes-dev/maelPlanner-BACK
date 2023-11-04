"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scheduleClassSchema_js_1 = __importDefault(require("../../schemas/mongoose/scheduleClassSchema.js"));
async function deleteScheduleClass(user_id, startDate, endDate) {
    const deletedSchedule = await scheduleClassSchema_js_1.default.deleteMany({
        user_id: user_id,
        start: {
            $gte: startDate,
        },
        end: {
            $lte: endDate,
        },
    });
    return deletedSchedule;
}
exports.default = deleteScheduleClass;
//# sourceMappingURL=deleteScheduleClass.js.map