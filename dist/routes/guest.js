"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
router.route('/login').post(user_1.apiPostLogin);
router.route('/register').post(user_1.apiPostRegister);
router.route('/refresh-token').post(user_1.apiPostRefreshToken);
router.route('/resetPasswordRequest').post(user_1.resetPasswordRequest);
exports.default = router;
//# sourceMappingURL=guest.js.map