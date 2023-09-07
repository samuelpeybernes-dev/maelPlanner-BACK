import joursFeries from '@socialgouv/jours-feries'
import {
  addDays,
  addHours,
  addWeeks,
  endOfISOWeek,
  format,
  formatISO,
  getISOWeek,
  isAfter,
  isSaturday,
  isSunday,
  parseISO,
  startOfWeek,
  subHours,
  set,
  nextFriday,
  endOfDay,
  startOfDay,
} from 'date-fns'

export default class DateUtils {
  /**
   ** Return the number of working days in a given period of time
   * @param {String} startDate "YYYY-MM-DD"
   * @param {String} endDate Optional "YYYY-MM-DD"
   * @returns {number}
   */
  static getWorkingDaysNumber(startDate, endDate) {
    return this.workingDaysFilter(startDate, endDate).length
  }

  /**
   ** For everyday we got the french day name, if it's not Samedi or Dimanche (weekend) we keep it and return all on an array
   * @param {Date} startDate "YYYY-MM-DD"
   * @param {Date} endDate "YYYY-MM-DD"
   * @returns {Array} "[Date Object, ...]"
   */
  static workingDaysFilter(startDate, endDate) {
    const workingDays = []
    if (!(endDate === 'default')) {
      let datePointer = new Date(startDate)

      endDate = new Date(endDate)

      /* On veut avoir aussi le dernier jour de compté */
      endDate = addDays(endDate, 1)
      endDate = set(endDate, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })

      // eslint-disable-next-line no-unmodified-loop-condition
      while (isAfter(endDate, datePointer)) {
        /* We test if it's during the weekend or jours feries before adding it to the array */
        if (!isSaturday(datePointer) && !isSunday(datePointer) && !this.joursFeriesDetector(datePointer)) {
          workingDays.push(new Date(datePointer))
        }
        datePointer = addDays(datePointer, 1)
      }
    }
    return workingDays
  }

  /**
   ** Compare a day to the french jourFeries list, if it's not a jourFeries return false, else return true
   * @param {Object} date
   * @returns {Boolean}
   */
  static joursFeriesDetector(date) {
    const joursFeriesDays = joursFeries(date.getFullYear())
    const joursFeriesDates = Object.values(joursFeriesDays)
    const dateISO = formatISO(date, { representation: 'date' })

    for (let i = 0; i < joursFeriesDates.length; i += 1) {
      const jourFerieDate = formatISO(joursFeriesDates[i], { representation: 'date' })
      if (dateISO === jourFerieDate) return true
    }
    return false
  }

  /**
   ** Calcule la date de début et de fin de la semaine pour un numéro de semaine donné dans une année.
   * @param {number} year
   * @param {number} weekNumber
   * @returns {Object} Retourne la date de début et la date de la fin de la semaine en String
   */
  static getWorkingWeekStartAndEndDaysInString(year, weekNumber) {
    const { monday, friday } = this.getWorkingWeekStartAndEndDaysInDate(year, weekNumber)
    return {
      monday: formatISO(monday, { representation: 'date' }),
      friday: formatISO(friday, { representation: 'date' }),
    }
  }

  /**
   ** Calcule la date de début et de fin de la semaine pour un numéro de semaine donné dans une année.
   * @param {number} year
   * @param {number} weekNumber
   * @returns {{ monday: Date, sunday: Date }} Retourne la date de début et la date de la fin de la semaine
   */
  static getWeekStartAndEndDays(year, weekNumber) {
    const mondayOfFirstWeekOfYear = DateUtils.getMondayOfFirstWeekOfYear(year)
    const monday = addWeeks(mondayOfFirstWeekOfYear, weekNumber - 1)
    let sunday = endOfISOWeek(monday)
    //* On met weekSunday à 23h59:59:59 pour avoir la dernière seconde de la semaine
    sunday = sunday.setHours(23, 59, 59, 999)

    return {
      monday,
      sunday,
    }
  }

  /**
   ** Calcule la date de début et de fin de la semaine de la date indiquée.
   * @param {Date} date
   * @returns {Object} Retourne la date de début et la date de la fin de la semaine en Date
   */
  static getWorkingWeekStartAndEndDaysInDateByDate(date) {
    return this.getWorkingWeekStartAndEndDaysInDate(date.getFullYear(), getISOWeek(date))
  }

  /**
   ** Calcule la date de début et de fin de la semaine pour un numéro de semaine donné dans une année.
   * @param {number} year
   * @param {number} weekNumber
   * @returns {Object} Retourne la date de début et la date de la fin de la semaine en Date
   */
  static getWorkingWeekStartAndEndDaysInDate(year, weekNumber) {
    const mondayOfFirstWeekOfYear = DateUtils.getMondayOfFirstWeekOfYear(year)
    const monday = startOfDay(addWeeks(mondayOfFirstWeekOfYear, weekNumber - 1))

    const friday = endOfDay(nextFriday(monday))

    return {
      monday,
      friday,
    }
  }

  /**
   ** Calcule le lundi de la première semaine de l'année, peu importe l'année.
   * @param {number} year
   * @returns {Date}
   */
  static getMondayOfFirstWeekOfYear(year) {
    //* Le jour définit est le 4 janvier parce que le 4 janvier est forcément dans la première semaine de l'année. C'est déterminé arbitrairement, mais ça fonctionne au moins de 1980 à 2110.
    return new Date(startOfWeek(new Date(`${year}-01-04`), { weekStartsOn: 1 }))
  }

  /**
   * * Retourne une date avec l'heure corrigée par rapport au fuseau horaire
   * ! Il faut que la date soit un string au format ISO.
   * Méthode utile pour la BDD lorsque l'heure est importante.
   * @param {string} isoDate
   * @returns
   */
  static getDateWithCorrectedTimeZoneFromString(isoDate) {
    return this.getDateWithCorrectedTimeZone(parseISO(isoDate))
  }

  /**
   * * Retourne une date avec l'heure corrigée par rapport au fuseau horaire.
   * ? Il faut que la date soit un objet Date.
   *  Méthode utile pour la BDD lorsque l'heure est importante.
   * @param {Date} date
   * @returns
   */
  static getDateWithCorrectedTimeZone(date) {
    const timezone = -date.getTimezoneOffset() / 60
    if (timezone >= 0) {
      return addHours(date, timezone)
    } else {
      return subHours(date, -timezone)
    }
  }

  /**
   ** Renvoie au format 'dd/MM/yyyy'
   * @param {Date} date
   * @returns
   */
  static getFrenchDate(date) {
    return format(date, 'dd/MM/yyyy')
  }
}
