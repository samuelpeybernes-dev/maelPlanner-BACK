"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const { where } = sequelize_1.default;
function multipleOperations(tab = [], column, operator) {
    return tab.map(item => where(column, operator, item));
}
exports.default = multipleOperations;
//# sourceMappingURL=multipleOperations.js.map