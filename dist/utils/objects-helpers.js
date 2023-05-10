"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateObjectInArray = void 0;
const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return Object.assign(Object.assign({}, u), newObjProps);
        }
        return u;
    });
};
exports.updateObjectInArray = updateObjectInArray;
//# sourceMappingURL=objects-helpers.js.map