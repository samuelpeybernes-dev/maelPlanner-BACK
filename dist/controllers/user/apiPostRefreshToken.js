"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateToken_1 = __importDefault(require("../../utils/generateToken"));
const dotenv_1 = require("../../config/dotenv");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function verifyRefreshToken(token) {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, dotenv_1.JWT_REFRESH_TOKEN_SECRET, (err, tokenDetails) => {
            if (err) {
                // Utilisez Promise.reject() avec un objet Error
                return reject(new Error('Invalid refresh token by jwt'));
            }
            return resolve(tokenDetails);
        });
    });
}
async function apiPostRefreshToken(req, res) {
    try {
        const resp = await verifyRefreshToken(req.body.refreshToken);
        // if (!resp.user) {
        //   return res.status(403).json({ message: 'Invalid refresh token after verify' })
        // }
        const { accessToken, refreshToken } = await (0, generateToken_1.default)(resp._id, resp.email);
        const responseObj = {
            message: 'Token refreshed',
            data: { accessToken, refreshToken },
        };
        return res.status(200).json(responseObj);
    }
    catch (error) {
        console.error(error);
        // Utilisez error.message pour renvoyer le message d'erreur
        return res.status(500).json({ error: error.message });
    }
}
exports.default = apiPostRefreshToken;
//# sourceMappingURL=apiPostRefreshToken.js.map