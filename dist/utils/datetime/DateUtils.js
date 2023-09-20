"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jours_feries_1 = __importDefault(require("@socialgouv/jours-feries"));
const date_fns_1 = require("date-fns");
class DateUtils {
    /**
     ** Return the number of working days in a given period of time
     * @param {String} startDate "YYYY-MM-DD"
     * @param {String} endDate Optional "YYYY-MM-DD"
     * @returns {number}
     */
    static getWorkingDaysNumber(startDate, endDate) {
        return this.workingDaysFilter(startDate, endDate).length;
    }
    /**
     ** For everyday we got the french day name, if it's not Samedi or Dimanche (weekend) we keep it and return all on an array
     * @param {Date} startDate "YYYY-MM-DD"
     * @param {Date} endDate "YYYY-MM-DD"
     * @returns {Array} "[Date Object, ...]"
     */
    static workingDaysFilter(startDate, endDate) {
        const workingDays = [];
        if (!(endDate === 'default')) {
            let datePointer = new Date(startDate);
            endDate = new Date(endDate);
            /* On veut avoir aussi le dernier jour de compté */
            endDate = (0, date_fns_1.addDays)(endDate, 1);
            endDate = (0, date_fns_1.set)(endDate, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
            // eslint-disable-next-line no-unmodified-loop-condition
            while ((0, date_fns_1.isAfter)(endDate, datePointer)) {
                /* We test if it's during the weekend or jours feries before adding it to the array */
                if (!(0, date_fns_1.isSaturday)(datePointer) && !(0, date_fns_1.isSunday)(datePointer) && !this.joursFeriesDetector(datePointer)) {
                    workingDays.push(new Date(datePointer));
                }
                datePointer = (0, date_fns_1.addDays)(datePointer, 1);
            }
        }
        return workingDays;
    }
    /**
     ** Compare a day to the french jourFeries list, if it's not a jourFeries return false, else return true
     * @param {Object} date
     * @returns {Boolean}
     */
    static joursFeriesDetector(date) {
        const joursFeriesDays = (0, jours_feries_1.default)(date.getFullYear());
        const joursFeriesDates = Object.values(joursFeriesDays);
        const dateISO = (0, date_fns_1.formatISO)(date, { representation: 'date' });
        for (let i = 0; i < joursFeriesDates.length; i += 1) {
            const jourFerieDate = (0, date_fns_1.formatISO)(joursFeriesDates[i], { representation: 'date' });
            if (dateISO === jourFerieDate)
                return true;
        }
        return false;
    }
    /**
     ** Calcule la date de début et de fin de la semaine pour un numéro de semaine donné dans une année.
     * @param {number} year
     * @param {number} weekNumber
     * @returns {Object} Retourne la date de début et la date de la fin de la semaine en String
     */
    static getWorkingWeekStartAndEndDaysInString(year, weekNumber) {
        const { monday, friday } = this.getWorkingWeekStartAndEndDaysInDate(year, weekNumber);
        return {
            monday: (0, date_fns_1.formatISO)(monday, { representation: 'date' }),
            friday: (0, date_fns_1.formatISO)(friday, { representation: 'date' }),
        };
    }
    /**
     ** Calcule la date de début et de fin de la semaine pour un numéro de semaine donné dans une année.
     * @param {number} year
     * @param {number} weekNumber
     * @returns {{ monday: Date, sunday: Date }} Retourne la date de début et la date de la fin de la semaine
     */
    static getWeekStartAndEndDays(year, weekNumber) {
        const mondayOfFirstWeekOfYear = DateUtils.getMondayOfFirstWeekOfYear(year);
        const monday = (0, date_fns_1.addWeeks)(mondayOfFirstWeekOfYear, weekNumber - 1);
        let sunday = (0, date_fns_1.endOfISOWeek)(monday);
        //* On met weekSunday à 23h59:59:59 pour avoir la dernière seconde de la semaine
        sunday = sunday.setHours(23, 59, 59, 999);
        return {
            monday,
            sunday,
        };
    }
    /**
     ** Calcule la date de début et de fin de la semaine de la date indiquée.
     * @param {Date} date
     * @returns {Object} Retourne la date de début et la date de la fin de la semaine en Date
     */
    static getWorkingWeekStartAndEndDaysInDateByDate(date) {
        return this.getWorkingWeekStartAndEndDaysInDate(date.getFullYear(), (0, date_fns_1.getISOWeek)(date));
    }
    /**
     ** Calcule la date de début et de fin de la semaine pour un numéro de semaine donné dans une année.
     * @param {number} year
     * @param {number} weekNumber
     * @returns {Object} Retourne la date de début et la date de la fin de la semaine en Date
     */
    static getWorkingWeekStartAndEndDaysInDate(year, weekNumber) {
        const mondayOfFirstWeekOfYear = DateUtils.getMondayOfFirstWeekOfYear(year);
        const monday = (0, date_fns_1.startOfDay)((0, date_fns_1.addWeeks)(mondayOfFirstWeekOfYear, weekNumber - 1));
        const friday = (0, date_fns_1.endOfDay)((0, date_fns_1.nextFriday)(monday));
        return {
            monday,
            friday,
        };
    }
    /**
     ** Calcule le lundi de la première semaine de l'année, peu importe l'année.
     * @param {number} year
     * @returns {Date}
     */
    static getMondayOfFirstWeekOfYear(year) {
        //* Le jour définit est le 4 janvier parce que le 4 janvier est forcément dans la première semaine de l'année. C'est déterminé arbitrairement, mais ça fonctionne au moins de 1980 à 2110.
        return new Date((0, date_fns_1.startOfWeek)(new Date(`${year}-01-04`), { weekStartsOn: 1 }));
    }
    /**
     * * Retourne une date avec l'heure corrigée par rapport au fuseau horaire
     * ! Il faut que la date soit un string au format ISO.
     * Méthode utile pour la BDD lorsque l'heure est importante.
     * @param {string} isoDate
     * @returns
     */
    static getDateWithCorrectedTimeZoneFromString(isoDate) {
        return this.getDateWithCorrectedTimeZone((0, date_fns_1.parseISO)(isoDate));
    }
    /**
     * * Retourne une date avec l'heure corrigée par rapport au fuseau horaire.
     * ? Il faut que la date soit un objet Date.
     *  Méthode utile pour la BDD lorsque l'heure est importante.
     * @param {Date} date
     * @returns
     */
    static getDateWithCorrectedTimeZone(date) {
        const timezone = -date.getTimezoneOffset() / 60;
        if (timezone >= 0) {
            return (0, date_fns_1.addHours)(date, timezone);
        }
        else {
            return (0, date_fns_1.subHours)(date, -timezone);
        }
    }
    /**
     ** Renvoie au format 'dd/MM/yyyy'
     * @param {Date} date
     * @returns
     */
    static getFrenchDate(date) {
        return (0, date_fns_1.format)(date, 'dd/MM/yyyy');
    }
}
exports.default = DateUtils;
//# sourceMappingURL=DateUtils.js.map