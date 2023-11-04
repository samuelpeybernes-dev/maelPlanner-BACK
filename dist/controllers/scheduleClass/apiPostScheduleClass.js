"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUpdateScheduleClass_js_1 = __importDefault(require("../../dao/mongo/createUpdateScheduleClass.js"));
async function apiPostScheduleClass(req, res) {
    try {
        const { scheduleClassJoi } = req.body;
        const { _id } = req.query;
        const scheduleClass = await (0, createUpdateScheduleClass_js_1.default)(_id, scheduleClassJoi);
        if (scheduleClass instanceof Error)
            return res.status(500).json({ error: scheduleClass.message });
        return res.status(200).json({ message: 'ok ', data: scheduleClass });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = apiPostScheduleClass;
//# sourceMappingURL=apiPostScheduleClass.js.map