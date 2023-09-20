"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const scheduleClassSchema = joi_1.default.object({
    id: joi_1.default.string().required(),
    newStart: joi_1.default.string().required(),
    newEnd: joi_1.default.string().required(),
    newText: joi_1.default.string()
        .regex(/^[a-zA-ZÀ-ÿ0-9\s'-.?!]+$/u)
        .min(1)
        .max(50),
    subject_id: joi_1.default.string().required(),
});
exports.default = scheduleClassSchema;
//# sourceMappingURL=scheduleClassSchema.js.map