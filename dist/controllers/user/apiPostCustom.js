"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const updateUserById_1 = __importDefault(require("../../dao/mongo/updateUserById"));
async function apiPostCustom(req, res) {
    try {
        const { userJoi } = req.body;
        const { _id } = req.query;
        const customization = await (0, updateUserById_1.default)(_id, userJoi);
        return res.status(200).json({ message: 'ok ' + customization.email });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = apiPostCustom;
//# sourceMappingURL=apiPostCustom.js.map