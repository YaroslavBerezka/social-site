export const getProfile = (state) => {
    return state.profilePage.profile;
};
export const getUserStatus = (state) => {
    return state.profilePage.status;
};
export const getAutorizedUserId = (state) => {
    return state.auth.userId;
};