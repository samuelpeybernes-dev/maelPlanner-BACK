/**
 * Tableau des noms des mois
 * @returns
 */
function getMonthNames(): string[] {
  return ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
}
/**
 * Tableau des noms des mois en abrégé
 * @returns
 */
function getShortMonthNames(): string[] {
  return ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc']
}
/**
 * retourne le nom du mois en fonction de son index (ça commence à 1)
 * @param month (1 à 12)
 * @returns
 */
export function getOneMonthName(month: number): string {
  if (month < 1 || month > 12) {
    throw new Error('Le mois doit être compris entre 1 et 12')
  }
  return getMonthNames()[month - 1]
}
