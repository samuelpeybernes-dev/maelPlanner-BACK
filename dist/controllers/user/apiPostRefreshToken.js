"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUserByEmail_1 = __importDefault(require("../../dao/mongo/getUserByEmail"));
const createUser_1 = __importDefault(require("../../dao/mongo/createUser"));
const logger_1 = __importDefault(require("../../utils/logger"));
const apiPostLogin_1 = __importDefault(require("./apiPostLogin"));
async function verifyRefreshToken(token) {
    return new Promise((resolve, reject) => {
        this.getUserTokenByToken(token).then((userToken) => {
            jwt.verify(token, config.jwt_refresh_token_secret, (err, tokenDetails) => {
                if (err)
                    return reject(new ErrorResponse("Invalid refresh token by jwt", 403, err));
                return resolve(new SuccessResponse("Token verified", 200, tokenDetails));
            });
        }).catch((err) => {
            logger_1.default.error("verifyRefreshToken " + JSON.stringify(err));
            return reject(new ErrorResponse("Invalid refresh token", 403, err));
        });
    });
}
async function apiPostRefreshToken(req, res) {
    try {
        const resp = await verifyRefreshToken(req.refreshToken);
        if (!resp.data.user)
            return Promise.reject(new ErrorResponse("Invalid refresh token after verify", 403));
        const tokens = await Models.userTokenModel.generateTokens({ id: resp.data.user._id, email: resp.data.user.email, role: resp.data.user.role, nano_id: resp.data.user.nano_id });
        return Promise.resolve(new SuccessResponse("Token refreshed", 200, { accessToken: tokens.data.accessToken, refreshToken: tokens.data.refreshToken }));
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
exports.default = apiPostRefreshToken;
//# sourceMappingURL=apiPostRefreshToken.js.map