"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_js_1 = __importDefault(require("../../schemas/mongoose/userSchema.js"));
async function createUpdateUserCustom(userEmail, customizationJoi) {
    console.log('🚀 ~ file: createUpdateUserCustom.js:4 ~ createUpdateUserCustom ~ customizationJoi:', customizationJoi);
    try {
        const filter = { email: userEmail };
        const result = await userSchema_js_1.default.findOneAndUpdate(filter, customizationJoi, {
            new: true,
        });
        return result;
    }
    catch (error) {
        console.error(error);
    }
}
exports.default = createUpdateUserCustom;
//# sourceMappingURL=createUpdateUserCustom.js.map