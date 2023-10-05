"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("../../config/dotenv");
const getUserPassword_1 = __importDefault(require("../../dao/mongo/getUserPassword"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const logger_1 = __importDefault(require("../../utils/logger"));
async function apiPostLogin(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const resp = await (0, getUserPassword_1.default)(email);
        logger_1.default.debug(resp);
        if (resp.password == null) {
            logger_1.default.debug("Login failed");
            return res.status(401).json({ message: "Login failed" });
        }
        if (bcrypt_1.default.compareSync(password, resp.password)) {
            const payload = { _id: resp._id, email: resp.email };
            const accessToken = jsonwebtoken_1.default.sign(payload, dotenv_1.JWT_ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
            const refreshToken = jsonwebtoken_1.default.sign(payload, dotenv_1.JWT_REFRESH_TOKEN_SECRET, { expiresIn: "30d" });
            return res.status(200).json({ accessToken, refreshToken });
        }
        else {
            return res.status(401).json({ message: "Login failed" });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = apiPostLogin;
//# sourceMappingURL=apiPostLogin.js.map