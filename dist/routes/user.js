"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const validateIncomingData_js_1 = __importDefault(require("../middlewares/validateIncomingData.js"));
const router = express_1.default.Router();
router.route('/postCustomization').post(validateIncomingData_js_1.default, user_1.apiPostCustom);
router.route('/getCustomization').get(user_1.apiGetProfil);
router.route('/resetPassword').post(validateIncomingData_js_1.default, user_1.resetPassword);
exports.default = router;
//# sourceMappingURL=user.js.map