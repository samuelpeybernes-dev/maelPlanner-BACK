"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const userSchema = new Schema({
    firstName: String,
    name: String,
    email: String,
    password: String,
    token: String,
    maxEventHoursPerDay: Number,
    lunchBreakStartHour: Number,
    lunchBreakEndHour: Number,
    startHour: Number,
    birthday: Date,
}, {
    collection: 'user',
    versionKey: false,
    required: true,
});
const user = mongoose_1.default.model('user', userSchema);
exports.default = user;
//# sourceMappingURL=userSchema.js.map