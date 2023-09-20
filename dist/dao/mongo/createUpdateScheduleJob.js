"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scheduleJobSchema_js_1 = __importDefault(require("../../schemas/mongoose/scheduleJobSchema.js"));
async function createUpdateScheduleJob(scheduleJobJoi) {
    try {
        const { id, newStart, newEnd, newText, newJob, newBackColor, newBorderColor } = scheduleJobJoi;
        const query = { id: id };
        // Rechercher le document avec le même 'id'
        const existingScheduleJob = await scheduleJobSchema_js_1.default.findOne(query);
        if (existingScheduleJob) {
            // Le document existe, vous pouvez mettre à jour ses propriétés ici
            existingScheduleJob.start = newStart;
            existingScheduleJob.end = newEnd;
            existingScheduleJob.text = newText;
            existingScheduleJob.job = newJob;
            existingScheduleJob.backColor = newBackColor;
            existingScheduleJob.borderColor = newBorderColor;
            // Mettre à jour le document dans la base de données
            await existingScheduleJob.save();
            return 'schedule job updated';
        }
        else {
            // Le document n'existe pas, vous pouvez en créer un nouveau ici
            const newScheduleJob = new scheduleJobSchema_js_1.default({
                id: id,
                start: newStart,
                end: newEnd,
                text: newText,
                job: newJob,
                backColor: newBackColor,
                borderColor: newBorderColor,
            });
            // Enregistrer le nouveau document dans la base de données
            await newScheduleJob.save();
            return 'schedule job created';
        }
    }
    catch (error) {
        console.error(error);
    }
}
exports.default = createUpdateScheduleJob;
//# sourceMappingURL=createUpdateScheduleJob.js.map