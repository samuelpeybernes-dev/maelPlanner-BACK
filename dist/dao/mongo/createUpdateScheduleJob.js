"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scheduleJobSchema_js_1 = __importDefault(require("../../schemas/mongoose/scheduleJobSchema.js"));
const userSchema_js_1 = __importDefault(require("../../schemas/mongoose/userSchema.js"));
async function createUpdateScheduleJob(user_id, scheduleJobJoi) {
    try {
        const { id, newStart, newEnd, newText, newHtml, newJob, newBackColor, newBorderColor } = scheduleJobJoi;
        const query = { id: id };
        const correspondingUser = await userSchema_js_1.default.findById(user_id);
        // Rechercher le document avec le même 'id'
        const existingScheduleJob = await scheduleJobSchema_js_1.default.findOne(query);
        if (!correspondingUser) {
            console.error('User not found for id:', user_id);
        }
        if (existingScheduleJob) {
            // Le document existe, vous pouvez mettre à jour ses propriétés ici
            existingScheduleJob.start = newStart;
            existingScheduleJob.end = newEnd;
            existingScheduleJob.text = newText;
            existingScheduleJob.html = newHtml;
            existingScheduleJob.job = newJob;
            existingScheduleJob.backColor = newBackColor;
            existingScheduleJob.borderColor = newBorderColor;
            existingScheduleJob.user_id = correspondingUser._id;
            // Mettre à jour le document dans la base de données
            await existingScheduleJob.save();
            return 'schedule job updated';
        }
        else {
            // Le document n'existe pas, vous pouvez en créer un nouveau ici
            // eslint-disable-next-line new-cap
            const newScheduleJob = new scheduleJobSchema_js_1.default({
                id: id,
                start: newStart,
                end: newEnd,
                text: newText,
                job: newJob,
                html: newHtml,
                backColor: newBackColor,
                borderColor: newBorderColor,
                user_id: correspondingUser._id,
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