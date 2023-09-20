"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_PUB_KEY_PATH = exports.REQUIRE_AUTH = exports.BAGDAD_PORT = exports.NODE_ENV = exports.mongoUrl = void 0;
const dotenv = __importStar(require("dotenv-safe"));
dotenv.config();
let dotenvPath;
switch (process.env.NODE_ENV) {
    case 'test':
        dotenvPath = '.env.example';
        break;
    case 'production':
        dotenvPath = '.env.example';
        break;
    default:
        dotenvPath = '.env.example';
}
dotenv.config({ path: dotenvPath });
exports.mongoUrl = `mongodb+srv://root:sam30127@sam-dev.a6whj1z.mongodb.net/maelPlanner?authSource=admin&w=1`;
exports.NODE_ENV = process.env.NODE_ENV;
exports.BAGDAD_PORT = exports.NODE_ENV === 'development' ? 1632 : 1631;
// eslint-disable-next-line eqeqeq
exports.REQUIRE_AUTH = exports.NODE_ENV === 'production' || process.env.REQUIRE_AUTH !== 'false';
exports.JWT_PUB_KEY_PATH = process.env.JWT_PUB_KEY_PATH;
//# sourceMappingURL=dotenv.js.map