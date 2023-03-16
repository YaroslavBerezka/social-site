import thunkMiddleware from "redux-thunk";
import appReducer from "./reducers/app-reducer";
import authReducer from "./reducers/auth-reducer";
import { reducer as formReducer } from "redux-form";
import usersReducer from "./reducers/users-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import profileReducer from "./reducers/profile-reducer";
import messagesReducer from "./reducers/messages-reducer";
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";


const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;