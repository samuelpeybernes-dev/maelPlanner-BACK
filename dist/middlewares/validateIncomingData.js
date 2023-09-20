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
const joiSchemas = __importStar(require("../schemas/joi"));
async function validateIncomingData(req, res, next) {
    try {
        const incomingDataName = Object.keys(req.body);
        if (incomingDataName.length === 0) {
            const error = "You're not sending any data.";
            console.error(incomingDataName);
            return res.status(400).json({ error });
        }
        if (incomingDataName.length > 1) {
            const error = "You're sending too many data. Please just send one.";
            console.error(incomingDataName);
            return res.status(400).json({ error });
        }
        const dataName = incomingDataName[0];
        //* On se sert du nom de l'objet pour trouver le schema Joi correspondant
        if (!joiSchemas.hasOwnProperty(dataName)) {
            const error = "You're sending the wrong type of data.";
            console.error(incomingDataName);
            return res.status(400).json({ error });
        }
        const incomingData = req.body[dataName];
        const schema = joiSchemas[dataName];
        const validData = await schema.validateAsync(incomingData);
        req.data = validData;
        return next();
    }
    catch (error) {
        if (error.hasOwnProperty('message')) {
            const errorToSend = error.message;
            console.error(error);
            return res.status(400).json({ error: errorToSend });
        }
        return console.error(error);
    }
}
exports.default = validateIncomingData;
//# sourceMappingURL=validateIncomingData.js.map