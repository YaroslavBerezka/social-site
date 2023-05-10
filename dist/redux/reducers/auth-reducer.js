"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.captchaUrlAC = exports.authUserDataAC = void 0;
const CAPTCHA_URL = "samurai-network/auth/CAPTCHA_URL";
const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case CAPTCHA_URL:
            return Object.assign(Object.assign({}, state), action.payload);
        default:
            return state;
    }
    ;
};
const authUserDataAC = (userId, email, login, isAuth) => ({ type: SET_USER_DATA,
    payload: { userId, email, login, isAuth } });
exports.authUserDataAC = authUserDataAC;
const captchaUrlAC = (captchaUrl) => ({ type: CAPTCHA_URL,
    payload: { captchaUrl } });
exports.captchaUrlAC = captchaUrlAC;
exports.default = authReducer;
//# sourceMappingURL=auth-reducer.js.map