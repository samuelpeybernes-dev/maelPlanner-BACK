"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../utils/logger"));
const userSchema_js_1 = __importDefault(require("../../schemas/mongoose/userSchema.js"));
async function getUserByEmail(email) {
    const user = await userSchema_js_1.default.findOne({ email });
    logger_1.default.debug(user);
    return user;
}
exports.default = getUserByEmail;
//# sourceMappingURL=getUserByEmail.js.map