"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const updateUserByToken_1 = __importDefault(require("../../dao/mongo/updateUserByToken"));
async function apiPostCustom(req, res) {
    try {
        const { userJoi } = req.body;
        console.log('🚀 ~ file: apiPostCustom.js:6 ~ apiPostCustom ~ userJoi:', userJoi);
        const { token } = req.query;
        console.log('🚀 ~ file: apiPostCustom.js:8 ~ apiPostCustom ~ email:', token);
        const customization = await (0, updateUserByToken_1.default)(token, userJoi);
        return res.status(200).json({ message: 'ok ' + customization.email });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = apiPostCustom;
//# sourceMappingURL=apiPostCustom.js.map