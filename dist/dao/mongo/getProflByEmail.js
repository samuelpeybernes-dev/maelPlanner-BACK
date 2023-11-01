"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_js_1 = __importDefault(require("../../schemas/mongoose/userSchema.js"));
async function getProflByEmail(email) {
    const profil = await userSchema_js_1.default.findOne({ email }, {
        _id: 0,
        password: 0,
    });
    return profil;
}
exports.default = getProflByEmail;
//# sourceMappingURL=getProflByEmail.js.map