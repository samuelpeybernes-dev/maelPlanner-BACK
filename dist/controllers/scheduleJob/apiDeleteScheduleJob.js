"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationError_1 = require("../../Errors/ValidationError");
const deleteScheduleJob_js_1 = __importDefault(require("../../dao/mongo/deleteScheduleJob.js"));
async function apiDeleteScheduleJob(req, res) {
    try {
        if (!req.query.hasOwnProperty('id'))
            throw new ValidationError_1.ValidationError('Please send an schedule id to delete ');
        const scheduleId = req.query.id;
        const scheduleJob = await (0, deleteScheduleJob_js_1.default)(scheduleId);
        return res.json({ scheduleJob });
    }
    catch (error) {
        if (error instanceof ValidationError_1.ValidationError)
            return res.status(400).json({ message: error.message });
        res.status(500).json({ message: 'internal server error' });
        return console.error(error);
    }
}
exports.default = apiDeleteScheduleJob;
//# sourceMappingURL=apiDeleteScheduleJob.js.map