"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUpdateHoursSubject_js_1 = __importDefault(require("../../dao/mongo/createUpdateHoursSubject.js"));
async function apiPostHoursSubject(req, res) {
    try {
        const { hoursSubjectJoi } = req.body;
        const { _id } = req.query;
        const hoursSubject = await (0, createUpdateHoursSubject_js_1.default)(_id, hoursSubjectJoi);
        if (hoursSubject instanceof Error)
            return res.status(500).json({ error: hoursSubject.message });
        return res.status(200).json({ message: 'ok ', data: hoursSubject });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = apiPostHoursSubject;
//# sourceMappingURL=apiPostHoursSubject.js.map