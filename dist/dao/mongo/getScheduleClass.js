"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scheduleClassSchema_js_1 = __importDefault(require("../../schemas/mongoose/scheduleClassSchema.js"));
const mongoose_1 = __importDefault(require("mongoose"));
async function getScheduleClass(user_id) {
    const schedule = await scheduleClassSchema_js_1.default.aggregate([
        {
            $match: {
                user_id: mongoose_1.default.Types.ObjectId(user_id),
            },
        },
        {
            $lookup: {
                from: 'hoursSubject',
                localField: 'subject_id',
                foreignField: '_id',
                as: 'subject',
            },
        },
        { $unset: 'user_id' },
    ]);
    return schedule;
}
exports.default = getScheduleClass;
//# sourceMappingURL=getScheduleClass.js.map