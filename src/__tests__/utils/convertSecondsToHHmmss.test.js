/* eslint-disable no-undef */
import convertSecondsToHHmmss from '../../utils/datetime/convertSecondsToHHmmss'
test('0 in hh:mm:ss should be 00:00:00', async () => {
  const result = convertSecondsToHHmmss(0)
  expect(result).toBe('00:00:00')
})

test('1 in hh:mm:ss should be 00:00:01', async () => {
  const result = convertSecondsToHHmmss(1)
  expect(result).toBe('00:00:01')
})

test('60 in hh:mm:ss should be 00:01:00', async () => {
  const result = convertSecondsToHHmmss(60)
  expect(result).toBe('00:01:00')
})

test('3600 in hh:mm:ss should be 01:00:00', async () => {
  const result = convertSecondsToHHmmss(3600)
  expect(result).toBe('01:00:00')
})

test('86400 in hh:mm:ss should be 24:00:00', async () => {
  const result = convertSecondsToHHmmss(86400)
  expect(result).toBe('24:00:00')
})
