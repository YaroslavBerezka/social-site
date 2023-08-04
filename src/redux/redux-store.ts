import {
    Action, applyMiddleware, combineReducers,
    legacy_createStore as createStore
} from "redux"
import { reducer as formReducer } from "redux-form"
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import appReducer from "./reducers/app-reducer"
import authReducer from "./reducers/auth-reducer"
import { chatReducer } from "./reducers/chat-reducer"
import messagesReducer from "./reducers/messages-reducer"
import profileReducer from "./reducers/profile-reducer"
import sidebarReducer from "./reducers/sidebar-reducer"
import usersReducer from "./reducers/users-reducer"

const rootReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

// window.store = store;

export default store;

type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>;

export type InferActionsTypes<T> = T extends {[key: string]: (...args: Array<any>) => infer U} ? U 
                                                                                               : never;
export type BaseThunkActionType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;
export type DispatchType = typeof store.dispatch;