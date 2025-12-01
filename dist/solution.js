"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// problem-1
const formatValue = (param) => {
    if (typeof (param) === 'string') {
        return param.toUpperCase();
    }
    else if (typeof (param) === 'number') {
        return param * 10;
    }
    else {
        return !param;
    }
};
//# sourceMappingURL=solution.js.map