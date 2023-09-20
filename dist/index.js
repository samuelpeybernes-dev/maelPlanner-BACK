"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./config/app"));
const dotenv_1 = require("./config/dotenv");
async function main() {
    try {
        await mongoose_1.default.connect(dotenv_1.mongoUrl);
        console.log(`MongoDB database connected.`);
        //    "start": "node -r ts-node/register/transpile-only -r tsconfig-paths/register ./dist/index.js",
        app_1.default.listen(1631, '0.0.0.0', () => console.log(`Listening on port : 1631`));
    }
    catch (error) {
        console.error(error);
    }
}
main();
//# sourceMappingURL=index.js.map