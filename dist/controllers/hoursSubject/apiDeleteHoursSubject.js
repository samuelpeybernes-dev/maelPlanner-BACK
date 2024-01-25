"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationError_1 = require("../../Errors/ValidationError");
const deleteHoursSubject_js_1 = __importDefault(require("../../dao/mongo/deleteHoursSubject.js"));
async function apiDeleteHoursSubject(req, res) {
    try {
        if (!req.query.hasOwnProperty('id'))
            throw new ValidationError_1.ValidationError('Please send an subject id to delete ');
        const id = req.query.id;
        const subject = await (0, deleteHoursSubject_js_1.default)(id);
        return res.json({ subject });
    }
    catch (error) {
        if (error instanceof ValidationError_1.ValidationError)
            return res.status(400).json({ message: error.message });
        res.status(500).json({ message: 'internal server error' });
        return console.error(error);
    }
}
exports.default = apiDeleteHoursSubject;
//# sourceMappingURL=apiDeleteHoursSubject.js.map