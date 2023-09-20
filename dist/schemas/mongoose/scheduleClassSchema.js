"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const scheduleClassSchema = new Schema({
    id: String,
    start: String,
    end: String,
    text: String,
    subject_id: Schema.Types.ObjectId,
}, {
    collection: 'scheduleClasse',
    versionKey: false,
    required: true,
});
const scheduleClass = mongoose_1.default.model('scheduleClasse', scheduleClassSchema);
exports.default = scheduleClass;
//# sourceMappingURL=scheduleClassSchema.js.map