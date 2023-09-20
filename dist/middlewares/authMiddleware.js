"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-prototype-builtins */
const fs_1 = __importDefault(require("fs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = require("../config/dotenv");
const JWT_PUB_KEY = fs_1.default.readFileSync(dotenv_1.JWT_PUB_KEY_PATH, 'utf8');
async function authMiddleware(req, res, next) {
    if (!dotenv_1.REQUIRE_AUTH) {
        req.jwt = {
            sub: {
                pseudo: 'dylan7212',
            },
        }; // on veut pas de token, mais on a besoin d'un pseudo
        return next();
    }
    if (!req.headers.hasOwnProperty('authorization'))
        return res.status(401).json({ error: 'Authorization property is missing.' });
    const [bearerPart, tokenPart] = req.headers.authorization.split(' ');
    if (bearerPart === 'Bearer' && tokenPart.match(/\S+\.\S+\.\S+/) !== null) {
        try {
            //* décode le token
            const verification = jsonwebtoken_1.default.verify(tokenPart, JWT_PUB_KEY, { algorithms: ['RS256'] });
            req.jwt = verification;
            return next();
        }
        catch (error) {
            return res.status(401).json({ error: 'You are not authorized to visit this route.' });
        }
    }
    return res.status(401).json({ error: 'You are not authorized to visit this route.' });
}
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map