"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_js_1 = __importDefault(require("../../schemas/mongoose/userSchema.js"));
const generateToken_1 = __importDefault(require("../../utils/generateToken"));
const sendEmail_1 = __importDefault(require("../../utils/email/sendEmail"));
const tokenSchema_js_1 = __importDefault(require("../../schemas/mongoose/tokenSchema.js"));
async function resetPasswordRequest(req, res) {
    try {
        const { email } = req.body;
        const user = await userSchema_js_1.default.findOne({ email });
        if (!user)
            throw new Error('User does not exist');
        let token = await tokenSchema_js_1.default.findOne({ userId: user._id });
        if (token)
            await token.deleteOne();
        const { accessToken, refreshToken } = await (0, generateToken_1.default)(user._id, user.email);
        await new tokenSchema_js_1.default({
            userId: user._id,
            token: accessToken,
            createdAt: Date.now(),
        }).save();
        const link = `planner.samuelpeybernesdev.fr/passwordReset?token=${accessToken}&id=${user._id}`;
        await (0, sendEmail_1.default)(user.email, 'Demande de changement de mot de passe ?', { name: user.firstName, link: link }, './template/requestResetPassword.handlebars');
        return res.status(200).json(link);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = resetPasswordRequest;
//# sourceMappingURL=resetPaswordRequest.js.map