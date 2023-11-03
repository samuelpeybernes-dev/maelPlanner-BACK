"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_js_1 = __importDefault(require("../../schemas/mongoose/userSchema.js"));
async function updateUserById(_id, customizationJoi) {
    try {
        const filter = { _id };
        const result = await userSchema_js_1.default.findOneAndUpdate(filter, customizationJoi, {
            new: true,
        });
        return result;
    }
    catch (error) {
        console.error(error);
    }
}
exports.default = updateUserById;
//# sourceMappingURL=updateUserById.js.map