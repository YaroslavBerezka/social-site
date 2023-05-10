"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.getCaptchaUrl = exports.login = exports.getAuth = void 0;
const redux_form_1 = require("redux-form");
const api_1 = require("../api");
const auth_reducer_1 = require("../../redux/reducers/auth-reducer");
const getAuth = () => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield api_1.authAPI.auth();
        switch (data.resultCode) {
            case 0:
                const { id, email, login } = data.data;
                dispatch((0, auth_reducer_1.authUserDataAC)(id, email, login, true));
        }
    }
    catch (error) {
        //processing some error 
    }
    ;
});
exports.getAuth = getAuth;
const login = (email, password, rememberMe, captcha = null ) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield api_1.authAPI.login(email, password, rememberMe, captcha);
        switch (data.resultCode) {
            case 0:
                dispatch((0, exports.getAuth)());
            case 1:
                dispatch((0, redux_form_1.stopSubmit)("login", { _error: data.messages[0] }));
            case 10:
                dispatch((0, exports.getCaptchaUrl)());
        }
    }
    catch (error) {
        //processing some error 
    }
    ;
});
exports.login = login;
const getCaptchaUrl = () => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield api_1.securityAPI.getCaptchaUrl();
        const captchaUrl = data.url;
        dispatch((0, auth_reducer_1.captchaUrlAC)(captchaUrl));
    }
    catch (error) {
        //processing some error 
    }
    ;
});
exports.getCaptchaUrl = getCaptchaUrl;
const logout = () => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield api_1.authAPI.logout();
        switch (data.resultCode) {
            case 0:
                dispatch((0, auth_reducer_1.authUserDataAC)(null, null, null, false));
                dispatch((0, auth_reducer_1.captchaUrlAC)(""));
        }
    }
    catch (error) {
        //processing some error 
    }
    ;
});
exports.logout = logout;
//# sourceMappingURL=thunk-auth.js.map