"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUserPassword_1 = __importDefault(require("../../dao/mongo/getUserPassword"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const logger_1 = __importDefault(require("../../utils/logger"));
const generateToken_1 = __importDefault(require("../../utils/generateToken"));
async function apiPostLogin(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const resp = await (0, getUserPassword_1.default)(email);
        logger_1.default.debug(resp);
        if (resp == null) {
            logger_1.default.debug('Login failed');
            return res.status(401).json({ message: 'Login failed' });
        }
        if (bcrypt_1.default.compareSync(password, resp.password)) {
            const { accessToken, refreshToken } = await (0, generateToken_1.default)(resp._id, resp.email);
            const id = resp._id;
            return res.status(200).json({ accessToken, refreshToken, id });
        }
        else {
            return res.status(401).json({ message: 'Login failed' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = apiPostLogin;
//# sourceMappingURL=apiPostLogin.js.map