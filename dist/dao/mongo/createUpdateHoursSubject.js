"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const hoursSubjectSchema_js_1 = __importDefault(require("../../schemas/mongoose/hoursSubjectSchema.js"));
const userSchema_js_1 = __importDefault(require("../../schemas/mongoose/userSchema.js"));
async function createUpdateHoursSubject(user_id, hoursSubjectJoi) {
    try {
        const correspondingUser = await userSchema_js_1.default.findById(user_id);
        if (!correspondingUser || undefined) {
            throw new Error('User not found for id:' + user_id);
        }
        for (const hoursSubjectItem of hoursSubjectJoi) {
            const { id, newText, newBackColor, newBorderColor, newWeekHours } = hoursSubjectItem;
            console.log('🚀 ~ createUpdateHoursSubject ~ hoursSubjectItem:', hoursSubjectItem);
            const existingHoursSubject = await hoursSubjectSchema_js_1.default.findById(id);
            if (existingHoursSubject) {
                // Le document existe, vous pouvez mettre à jour ses propriétés ici
                existingHoursSubject.text = newText;
                existingHoursSubject.backColor = newBackColor;
                existingHoursSubject.borderColor = newBorderColor;
                existingHoursSubject.weekHours = newWeekHours;
                existingHoursSubject.user_id = correspondingUser._id;
                // Mettre à jour le document dans la base de données
                await existingHoursSubject.save();
                console.log('Hours subject updated for id:', id);
            }
            else {
                // Le document n'existe pas, vous pouvez en créer un nouveau ici
                const newHoursSubject = new hoursSubjectSchema_js_1.default({
                    text: newText,
                    backColor: newBackColor,
                    borderColor: newBorderColor,
                    weekHours: newWeekHours,
                    user_id: correspondingUser._id,
                });
                // Enregistrer le nouveau document dans la base de données
                await newHoursSubject.save();
                console.log('New Hours subject created for id:', id);
            }
        }
    }
    catch (error) {
        return error;
    }
}
exports.default = createUpdateHoursSubject;
//# sourceMappingURL=createUpdateHoursSubject.js.map