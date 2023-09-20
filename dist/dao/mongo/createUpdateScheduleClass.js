"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scheduleClassSchema_js_1 = __importDefault(require("../../schemas/mongoose/scheduleClassSchema.js"));
const hoursSubjectSchema_js_1 = __importDefault(require("../../schemas/mongoose/hoursSubjectSchema.js"));
async function createUpdateScheduleClass(scheduleClassJoi) {
    try {
        const { id, subject_id, newStart, newEnd, newText } = scheduleClassJoi;
        const correspondingHoursSubject = await hoursSubjectSchema_js_1.default.findById(subject_id);
        const existingScheduleClass = await scheduleClassSchema_js_1.default.findOne({ id: id });
        if (!correspondingHoursSubject) {
            return 'HoursSubject not found';
        }
        if (existingScheduleClass) {
            // Le document existe, vous pouvez mettre à jour ses propriétés ici
            existingScheduleClass.start = newStart;
            existingScheduleClass.end = newEnd;
            existingScheduleClass.text = newText;
            existingScheduleClass.subject_id = correspondingHoursSubject._id;
            // Mettre à jour le document dans la base de données
            await existingScheduleClass.save();
            return 'schedule class updated';
        }
        else {
            // Le document n'existe pas, vous pouvez en créer un nouveau ici
            const newScheduleClass = new scheduleClassSchema_js_1.default({
                id: id,
                start: newStart,
                end: newEnd,
                text: newText,
                subject_id: correspondingHoursSubject._id,
            });
            // Enregistrer le nouveau document dans la base de données
            await newScheduleClass.save();
            return 'schedule class created';
        }
    }
    catch (error) {
        console.error(error);
    }
}
exports.default = createUpdateScheduleClass;
//# sourceMappingURL=createUpdateScheduleClass.js.map