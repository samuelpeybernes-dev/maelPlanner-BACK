"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tokenSchema_js_1 = __importDefault(require("../../schemas/mongoose/tokenSchema.js"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const updateUserById_1 = __importDefault(require("../../dao/mongo/updateUserById"));
const userSchema_js_1 = __importDefault(require("../../schemas/mongoose/userSchema.js"));
const sendEmail_1 = __importDefault(require("../../utils/email/sendEmail"));
async function resetPassword(req, res) {
    try {
        const { userId, token, password } = req.body;
        let passwordResetToken = await tokenSchema_js_1.default.findOne({ userId });
        if (!passwordResetToken) {
            throw new Error('Invalid or expired password reset token');
        }
        const isValid = JSON.stringify(token) === JSON.stringify(passwordResetToken.token);
        if (!isValid) {
            throw new Error('Invalid or expired password reset token');
        }
        const hash = await bcrypt_1.default.hashSync(password, 10);
        await (0, updateUserById_1.default)(userId, { password: hash });
        const user = await userSchema_js_1.default.findById({ _id: userId });
        await (0, sendEmail_1.default)(user.email, 'Mot de passe réinitialisé avec succès ✅🔑', {
            name: user.firstName,
        }, './template/resetPassword.handlebars');
        await passwordResetToken.deleteOne();
        return res.json(true);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = resetPassword;
//# sourceMappingURL=resetPassword.js.map