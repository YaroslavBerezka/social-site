"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCaptchaUrl = exports.getLogin = exports.getIsAuth = void 0;
const getIsAuth = (state) => {
    return state.auth.isAuth;
};
exports.getIsAuth = getIsAuth;
const getLogin = (state) => {
    return state.auth.login;
};
exports.getLogin = getLogin;
const getCaptchaUrl = (state) => {
    return state.auth.captchaUrl;
};
exports.getCaptchaUrl = getCaptchaUrl;
//# sourceMappingURL=header-selectors.js.map