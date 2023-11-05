"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userSchema = joi_1.default.object({
    firstName: joi_1.default.string(),
    name: joi_1.default.string(),
    password: joi_1.default.string(),
    email: joi_1.default.string().email(),
    maxEventHoursPerDay: joi_1.default.number(),
    lunchBreakStartHour: joi_1.default.number(),
    lunchBreakEndHour: joi_1.default.number(),
    startHour: joi_1.default.number(),
});
exports.default = userSchema;
//# sourceMappingURL=userSchema.js.map