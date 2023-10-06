"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("../config/dotenv");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function generateToken(_id, email) {
    const payload = { _id: _id, email: email };
    const accessToken = jsonwebtoken_1.default.sign(payload, dotenv_1.JWT_ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jsonwebtoken_1.default.sign(payload, dotenv_1.JWT_REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
    return { accessToken, refreshToken };
}
exports.default = generateToken;
//# sourceMappingURL=generateToken.js.map