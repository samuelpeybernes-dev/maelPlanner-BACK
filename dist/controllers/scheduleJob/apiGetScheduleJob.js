"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationError_1 = require("../../Errors/ValidationError");
const getScheduleJob_js_1 = __importDefault(require("../../dao/mongo/getScheduleJob.js"));
async function apiGetScheduleJob(req, res) {
    try {
        const scheduleJob = await (0, getScheduleJob_js_1.default)();
        return res.json({ scheduleJob });
    }
    catch (error) {
        if (error instanceof ValidationError_1.ValidationError)
            return res.status(400).json({ message: error.message });
        res.status(500).json({ message: 'internal server error' });
        return console.error(error);
    }
}
exports.default = apiGetScheduleJob;
//# sourceMappingURL=apiGetScheduleJob.js.map