"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const scheduleJobSchema = new Schema({
    id: String,
    start: String,
    end: String,
    text: String,
    html: String,
    job: Boolean,
    backColor: String,
    borderColor: String,
    user_id: Schema.Types.ObjectId,
}, {
    collection: 'scheduleJob',
    versionKey: false,
    required: true,
});
const scheduleJob = mongoose_1.default.model('scheduleJob', scheduleJobSchema);
exports.default = scheduleJob;
//# sourceMappingURL=scheduleJobSchema.js.map