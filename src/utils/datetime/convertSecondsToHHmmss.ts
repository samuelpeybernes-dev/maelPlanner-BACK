import { Duration, intervalToDuration } from 'date-fns'

/**
 ** Convertit un nombre de secondes vers un format hh:mm:ss
 * @param {number} seconds
 * @returns hh:mm:ss
 */
function convertSecondsToHHmmss(secondsInput: number): string {
  if (!secondsInput) return '00:00:00'

  const start = new Date(0)
  const end = new Date(secondsInput * 1000) // converting seconds to milliseconds
  let duration: Duration = { days: undefined, hours: undefined, minutes: undefined, seconds: undefined }
  try {
    duration = intervalToDuration({ start, end })
  } catch (e) {
    console.log('secondsInput', secondsInput)
    console.log('start', start)
    console.log('end', end)
  }

  const hours = ((duration.days || 0) * 24 + (duration.hours || 0)).toString().padStart(2, '0')
  const minutes = (duration.minutes || 0).toString().padStart(2, '0')
  const seconds = (duration.seconds || 0).toString().padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`
}

export default convertSecondsToHHmmss
