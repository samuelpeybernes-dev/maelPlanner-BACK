"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scheduleClassSchema_js_1 = __importDefault(require("../../schemas/mongoose/scheduleClassSchema.js"));
async function deleteScheduleClass() {
    const schedule = await scheduleClassSchema_js_1.default.remove();
    return schedule;
}
exports.default = deleteScheduleClass;
//# sourceMappingURL=deleteScheduleClass.js.map