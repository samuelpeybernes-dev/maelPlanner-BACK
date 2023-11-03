"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationError_1 = require("../../Errors/ValidationError");
const getUserByToken_js_1 = __importDefault(require("../../dao/mongo/getUserByToken.js"));
async function apiGetProfil(req, res) {
    try {
        const { token } = req.query;
        const profil = await (0, getUserByToken_js_1.default)(token);
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