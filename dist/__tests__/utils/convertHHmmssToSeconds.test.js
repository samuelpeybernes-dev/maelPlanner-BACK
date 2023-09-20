"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const convertSecondsToHHmmss_1 = __importDefault(require("../../utils/datetime/convertSecondsToHHmmss"));
const convertHHmmssToSeconds_1 = __importDefault(require("../../utils/datetime/convertHHmmssToSeconds"));
test('00:00:00 should be 0s', async () => {
    const result = (0, convertHHmmssToSeconds_1.default)('00:00:00');
    expect(result).toBe(0);
});
test('00:00:01 should be 1s', async () => {
    const result = (0, convertHHmmssToSeconds_1.default)('00:00:01');
    expect(result).toBe(1);
});
test('Take a random number with an inverse function', async () => {
    const random = 1234;
    const test = (0, convertSecondsToHHmmss_1.default)(random);
    const result = (0, convertHHmmssToSeconds_1.default)(test);
    expect(result).toBe(random);
});
//# sourceMappingURL=convertHHmmssToSeconds.test.js.map