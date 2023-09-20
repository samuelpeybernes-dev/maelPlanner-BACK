"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoUrl = void 0;
//dotenv.config()
const MONGO_DB_HOST = process.env.MONGO_DB_HOST;
const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
exports.mongoUrl = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}/${MONGO_DB_NAME}?authSource=admin&w=1`;
/*
export const NODE_ENV: string = process.env.NODE_ENV
// eslint-disable-next-line eqeqeq
export const REQUIRE_AUTH: boolean = NODE_ENV === 'production' || process.env.REQUIRE_AUTH! !== 'false'

export const JWT_PUB_KEY_PATH: string = process.env.JWT_PUB_KEY_PATH!
*/
//# sourceMappingURL=dotenv.js.map