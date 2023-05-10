"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializedSuccessAC = void 0;
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const initialState = {
    initialized: false,
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return Object.assign(Object.assign({}, state), { initialized: true });
        default:
            return state;
    }
    ;
};
const initializedSuccessAC = () => ({ type: INITIALIZED_SUCCESS, });
exports.initializedSuccessAC = initializedSuccessAC;
exports.default = appReducer;
//# sourceMappingURL=app-reducer.js.map