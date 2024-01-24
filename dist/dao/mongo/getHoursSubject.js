"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hoursSubjectSchema_js_1 = __importDefault(require("../../schemas/mongoose/hoursSubjectSchema.js"));
async function getHoursSubject(user_id) {
    const schedule = await hoursSubjectSchema_js_1.default.find({ user_id }, {
        user_id: 0,
    });
    return schedule;
}
exports.default = getHoursSubject;
//# sourceMappingURL=getHoursSubject.js.map