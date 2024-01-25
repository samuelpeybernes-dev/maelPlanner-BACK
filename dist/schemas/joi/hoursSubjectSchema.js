"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const hoursSubjectSchema = joi_1.default.array().items(joi_1.default.object({
    id: joi_1.default.string(),
    newText: joi_1.default.string()
        .regex(/^[a-zA-ZÀ-ÿ0-9\s'-.?!]+$/u)
        .min(1)
        .max(50),
    newWeekHours: joi_1.default.number(),
    newBorderColor: joi_1.default.string().required(),
    newBackColor: joi_1.default.string().required(),
}));
exports.default = hoursSubjectSchema;
//# sourceMappingURL=hoursSubjectSchema.js.map