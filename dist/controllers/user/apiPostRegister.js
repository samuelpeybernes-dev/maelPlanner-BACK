"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUserByEmail_1 = __importDefault(require("../../dao/mongo/getUserByEmail"));
const createUser_1 = __importDefault(require("../../dao/mongo/createUser"));
const logger_1 = __importDefault(require("../../utils/logger"));
const apiPostLogin_1 = __importDefault(require("./apiPostLogin"));
async function apiPostRegister(req, res) {
    try {
        const { name, email, password } = req.body;
        const user = await (0, getUserByEmail_1.default)(email);
        if (user) {
            return res.status(401).json({ message: "Existing user" });
        }
        await (0, createUser_1.default)(name, email, password);
        return await (0, apiPostLogin_1.default)(req, res);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = apiPostRegister;
//# sourceMappingURL=apiPostRegister.js.map