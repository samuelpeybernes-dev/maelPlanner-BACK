"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const scheduleJob_1 = __importDefault(require("../routes/scheduleJob"));
const scheduleClass_1 = __importDefault(require("../routes/scheduleClass"));
const hoursSubject_1 = __importDefault(require("../routes/hoursSubject"));
// import authMiddleware from '../middlewares/authMiddleware.js'
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => res.json('Home de Cron ⏲'));
app.get('/api', (req, res) => res.json({ data: "Bienvenue sur l'api ⏲" }));
app.get('/api/v1', (req, res) => res.json("Bienvenue sur la v1 de l'api ⏲"));
// app.use('/api/v1/scheduleJob', authMiddleware, scheduleJob)
app.use('/api/v1/scheduleJob', scheduleJob_1.default);
app.use('/api/v1/scheduleClass', scheduleClass_1.default);
app.use('/api/v1/hoursSubject', hoursSubject_1.default);
app.use('*', (req, res) => res.status(404).json({
    error: 'Not found 🤯',
}));
exports.default = app;
//# sourceMappingURL=app.js.map