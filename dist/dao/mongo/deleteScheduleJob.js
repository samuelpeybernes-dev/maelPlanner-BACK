"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scheduleJobSchema_js_1 = __importDefault(require("../../schemas/mongoose/scheduleJobSchema.js"));
async function deleteScheduleJob(id) {
    const schedule = await scheduleJobSchema_js_1.default.findOneAndRemove({ id });
    return schedule;
}
exports.default = deleteScheduleJob;
//# sourceMappingURL=deleteScheduleJob.js.map