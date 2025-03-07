"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSchema_js_1 = __importDefault(require("../../schemas/mongoose/userSchema.js"));
const bcrypt_1 = __importDefault(require("bcrypt"));
async function createUser(firstName, name, email, password) {
    try {
        // eslint-disable-next-line new-cap
        const newUser = new userSchema_js_1.default({
            firstName: firstName,
            name: name,
            email: email,
            password: bcrypt_1.default.hashSync(password, 10),
        });
        await newUser.save();
        return newUser;
    }
    catch (error) {
        console.error(error);
    }
}
exports.default = createUser;
//# sourceMappingURL=createUser.js.map