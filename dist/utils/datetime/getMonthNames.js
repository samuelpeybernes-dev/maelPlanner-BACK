"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneMonthName = void 0;
/**
 * Tableau des noms des mois
 * @returns
 */
function getMonthNames() {
    return ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
}
/**
 * Tableau des noms des mois en abrégé
 * @returns
 */
function getShortMonthNames() {
    return ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
}
/**
 * retourne le nom du mois en fonction de son index (ça commence à 1)
 * @param month (1 à 12)
 * @returns
 */
function getOneMonthName(month) {
    if (month < 1 || month > 12) {
        throw new Error('Le mois doit être compris entre 1 et 12');
    }
    return getMonthNames()[month - 1];
}
exports.getOneMonthName = getOneMonthName;
//# sourceMappingURL=getMonthNames.js.map