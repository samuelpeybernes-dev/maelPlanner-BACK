"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const logger_1 = __importDefault(require("../utils/logger"));
const userSchema_1 = __importDefault(require("../schemas/mongoose/userSchema"));
const dotenv_1 = require("../config/dotenv");
passport_1.default.use(new passport_jwt_1.Strategy({
    secretOrKey: dotenv_1.JWT_ACCESS_TOKEN_SECRET,
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
}, async (payload, done) => {
    try {
        const user = await userSchema_1.default.findById(payload._id);
        logger_1.default.info(payload);
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    }
    catch (err) {
        logger_1.default.error(err);
        return done(err, false);
    }
}));
exports.default = passport_1.default;
//# sourceMappingURL=PassportJWT.js.map