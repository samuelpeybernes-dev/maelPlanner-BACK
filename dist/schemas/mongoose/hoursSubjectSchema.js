"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const hoursSubjectSchema = new Schema({
    _id: Schema.Types.ObjectId,
    text: String,
    weekHours: Number,
    backColor: String,
    borderColor: String,
    user_id: Schema.Types.ObjectId,
}, {
    collection: 'hoursSubject',
    versionKey: false,
    required: true,
});
const hoursSubject = mongoose_1.default.model('hoursSubject', hoursSubjectSchema);
exports.default = hoursSubject;
//# sourceMappingURL=hoursSubjectSchema.js.map