"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationError_1 = require("../../Errors/ValidationError");
const getUserById_js_1 = __importDefault(require("../../dao/mongo/getUserById.js"));
async function apiGetProfil(req, res) {
    try {
        const { _id } = req.query;
        const profil = await (0, getUserById_js_1.default)(_id);
        return res.json({ profil });
    }
    catch (error) {
        if (error instanceof ValidationError_1.ValidationError)
            return res.status(400).json({ message: error.message });
        res.status(500).json({ message: 'internal server error' });
        return console.error(error);
    }
}
exports.default = apiGetProfil;
//# sourceMappingURL=apiGetProfil.js.map