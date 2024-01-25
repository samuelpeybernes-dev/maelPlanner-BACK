"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hoursSubjectSchema_js_1 = __importDefault(require("../../schemas/mongoose/hoursSubjectSchema.js"));
async function deleteHoursSubject(id) {
    const subject = await hoursSubjectSchema_js_1.default.findOneAndRemove({ _id: id });
    return subject;
}
exports.default = deleteHoursSubject;
//# sourceMappingURL=deleteHoursSubject.js.map