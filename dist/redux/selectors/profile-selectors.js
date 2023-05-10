"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAutorizedUserId = exports.getUserStatus = exports.getProfile = void 0;
const getProfile = (state) => {
    return state.profilePage.profile;
};
exports.getProfile = getProfile;
const getUserStatus = (state) => {
    return state.profilePage.status;
};
exports.getUserStatus = getUserStatus;
const getAutorizedUserId = (state) => {
    return state.auth.userId;
};
exports.getAutorizedUserId = getAutorizedUserId;
//# sourceMappingURL=profile-selectors.js.map