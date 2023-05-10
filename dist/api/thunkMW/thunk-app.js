"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApp = void 0;
const thunk_auth_1 = require("./thunk-auth");
const app_reducer_1 = require("../../redux/reducers/app-reducer");
const initializeApp = () => (dispatch) => {
    try {
        const promise = dispatch((0, thunk_auth_1.getAuth)());
        Promise.all([promise])
            .then(() => {
            dispatch((0, app_reducer_1.initializedSuccessAC)());
        });
    }
    catch (error) {
        //processing some error
    }
    ;
};
exports.initializeApp = initializeApp;
//# sourceMappingURL=thunk-app.js.map