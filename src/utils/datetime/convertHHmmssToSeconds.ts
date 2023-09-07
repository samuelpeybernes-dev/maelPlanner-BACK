import { hoursToSeconds, minutesToSeconds } from 'date-fns'

function convertHHmmssToSeconds(time: string) {
  const [hours, minutes, seconds] = time.split(':')
  return hoursToSeconds(parseInt(hours)) + minutesToSeconds(parseInt(minutes)) + parseInt(seconds)
}

export default convertHHmmssToSeconds
