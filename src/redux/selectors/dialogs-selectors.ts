import { AppStateType } from "../redux-store";

export const getMessagePage = (state: AppStateType) => {
    return state.messagesPage;
};