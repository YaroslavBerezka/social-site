"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxLengthCreator = exports.required = void 0;
const required = (value) => {
    if (value)
        return undefined;
    return "Field is required";
};
exports.required = required;
const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength)
        return `Max length is ${maxLength} symbols`;
    return undefined;
};
exports.maxLengthCreator = maxLengthCreator;
//# sourceMappingURL=validators.js.map