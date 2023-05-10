import { AppStateType } from "../redux-store";

export const getProfile = (state: AppStateType) => {
    return state.profilePage.profile;
};
export const getUserStatus = (state: AppStateType) => {
    return state.profilePage.status;
};
export const getAutorizedUserId = (state: AppStateType) => {
    return state.auth.userId;
};