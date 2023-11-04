"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUpdateScheduleJob_1 = __importDefault(require("../../dao/mongo/createUpdateScheduleJob"));
async function apiPostScheduleJob(req, res) {
    try {
        const { scheduleJobJoi } = req.body;
        const { _id } = req.query;
        const scheduleJob = await (0, createUpdateScheduleJob_1.default)(_id, scheduleJobJoi);
        return res.status(200).json({ message: 'ok ' + scheduleJob });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = apiPostScheduleJob;
//# sourceMappingURL=apiPostScheduleJob.js.map