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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_PUB_KEY_PATH = exports.ENABLE_CACHE = exports.REQUIRE_AUTH = exports.BAGDAD_PORT = exports.NODE_ENV = exports.mongoUrl = void 0;
const dotenv = __importStar(require("dotenv-safe"));
const path_1 = __importDefault(require("path"));
dotenv.config();
let dotenvPath;
switch (process.env.NODE_ENV) {
    case 'test':
        dotenvPath = path_1.default.join(__dirname, '.env');
        break;
    case 'production':
        dotenvPath = path_1.default.join(__dirname, '.env');
        break;
    default:
        dotenvPath = path_1.default.join(__dirname, '.env');
}
dotenv.config({ path: dotenvPath });
const MONGO_DB_HOST = process.env.MONGO_DB_HOST;
const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
exports.mongoUrl = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}/${MONGO_DB_NAME}?authSource=admin&w=1`;
exports.NODE_ENV = process.env.NODE_ENV;
exports.BAGDAD_PORT = exports.NODE_ENV === 'development' ? 1632 : 1631;
// eslint-disable-next-line eqeqeq
exports.REQUIRE_AUTH = exports.NODE_ENV === 'production' || process.env.REQUIRE_AUTH !== 'false';
exports.ENABLE_CACHE = process.env.ENABLE_CACHE !== 'false';
exports.JWT_PUB_KEY_PATH = process.env.JWT_PUB_KEY_PATH;
//# sourceMappingURL=dotenv.js.map