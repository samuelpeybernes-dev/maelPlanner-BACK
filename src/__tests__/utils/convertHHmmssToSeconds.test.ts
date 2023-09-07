/* eslint-disable no-undef */
import convertSecondsToHHmmss from '../../utils/datetime/convertSecondsToHHmmss'
import convertHHmmssToSeconds from '../../utils/datetime/convertHHmmssToSeconds'

test('00:00:00 should be 0s', async () => {
  const result = convertHHmmssToSeconds('00:00:00')
  expect(result).toBe(0)
})

test('00:00:01 should be 1s', async () => {
  const result = convertHHmmssToSeconds('00:00:01')
  expect(result).toBe(1)
})

test('Take a random number with an inverse function', async () => {
  const random = 1234
  const test = convertSecondsToHHmmss(random)
  const result = convertHHmmssToSeconds(test)
  expect(result).toBe(random)
})
