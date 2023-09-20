"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const convertSecondsToHHmmss_1 = __importDefault(require("../../utils/datetime/convertSecondsToHHmmss"));
test('0 in hh:mm:ss should be 00:00:00', async () => {
    const result = (0, convertSecondsToHHmmss_1.default)(0);
    expect(result).toBe('00:00:00');
});
test('1 in hh:mm:ss should be 00:00:01', async () => {
    const result = (0, convertSecondsToHHmmss_1.default)(1);
    expect(result).toBe('00:00:01');
});
test('60 in hh:mm:ss should be 00:01:00', async () => {
    const result = (0, convertSecondsToHHmmss_1.default)(60);
    expect(result).toBe('00:01:00');
});
test('3600 in hh:mm:ss should be 01:00:00', async () => {
    const result = (0, convertSecondsToHHmmss_1.default)(3600);
    expect(result).toBe('01:00:00');
});
test('86400 in hh:mm:ss should be 24:00:00', async () => {
    const result = (0, convertSecondsToHHmmss_1.default)(86400);
    expect(result).toBe('24:00:00');
});
//# sourceMappingURL=convertSecondsToHHmmss.test.js.map