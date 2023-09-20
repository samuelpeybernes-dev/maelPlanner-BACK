"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (num, numberOfDecimals = 0) => {
    if (isNaN(num)) {
        return num;
    }
    const powerOfTen = 10 ** numberOfDecimals;
    return Math.round(num * powerOfTen) / powerOfTen;
};
//# sourceMappingURL=roundDecimals.js.map