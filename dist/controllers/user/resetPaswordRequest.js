"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_js_1 = __importDefault(require("../../schemas/mongoose/userSchema.js"));
const generateToken_1 = __importDefault(require("../../utils/generateToken"));
const sendEmail_1 = __importDefault(require("../../utils/email/sendEmail"));
async function resetPasswordRequest(req, res) {
    try {
        const { email } = req.body;
        const user = await userSchema_js_1.default.findOne({ email });
        if (!user)
            throw new Error('User does not exist');
        const { accessToken, refreshToken } = await (0, generateToken_1.default)(user._id, user.email);
        const link = `https://planner.samuelpeybernesdev.fr/passwordReset?token=${accessToken}&id=${user._id}`;
        (0, sendEmail_1.default)('samuel.peybernes@ecoles-epsi.net', 'Password Reset Request', { name: user.name, link: link }, './template/requestResetPassword.handlebars');
        return link;
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = resetPasswordRequest;
//# sourceMappingURL=resetPaswordRequest.js.map