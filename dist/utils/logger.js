"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logLevels = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
};
const logger = (0, winston_1.createLogger)({
    level: 'debug',
    levels: logLevels,
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), winston_1.format.errors({ stack: true }), winston_1.format.printf(({ timestamp, level, message }) => {
        if (message instanceof Object) {
            return `[${timestamp}] ${level}: ${JSON.stringify(message, null, 4)}`;
        }
        return `[${timestamp}] ${level}: ${message}`;
    })),
    transports: [new winston_1.transports.File({ filename: '../logs/error.log', level: 'error' }), new winston_1.transports.Console()],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map