"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationError_1 = require("../../Errors/ValidationError");
const deleteScheduleClass_js_1 = __importDefault(require("../../dao/mongo/deleteScheduleClass.js"));
async function apiDeleteScheduleClass(req, res) {
    try {
        const { _id } = req.query;
        const startDate = req.query.start;
        const endDate = req.query.end;
        const scheduleClass = await (0, deleteScheduleClass_js_1.default)(_id, startDate, endDate);
        return res.json({ scheduleClass });
    }
    catch (error) {
        if (error instanceof ValidationError_1.ValidationError)
            return res.status(400).json({ message: error.message });
        res.status(500).json({ message: 'internal server error' });
        return console.error(error);
    }
}
exports.default = apiDeleteScheduleClass;
//# sourceMappingURL=apiDeleteScheduleClass.js.map