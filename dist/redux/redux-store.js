"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const app_reducer_1 = __importDefault(require("./reducers/app-reducer"));
const auth_reducer_1 = __importDefault(require("./reducers/auth-reducer"));
const redux_form_1 = require("redux-form");
const users_reducer_1 = __importDefault(require("./reducers/users-reducer"));
const sidebar_reducer_1 = __importDefault(require("./reducers/sidebar-reducer"));
const profile_reducer_1 = __importDefault(require("./reducers/profile-reducer"));
const messages_reducer_1 = __importDefault(require("./reducers/messages-reducer"));
const redux_1 = require("redux");
const reducers = (0, redux_1.combineReducers)({
    profilePage: profile_reducer_1.default,
    messagesPage: messages_reducer_1.default,
    sidebar: sidebar_reducer_1.default,
    usersPage: users_reducer_1.default,
    auth: auth_reducer_1.default,
    form: redux_form_1.reducer,
    app: app_reducer_1.default,
});
const store = (0, redux_1.legacy_createStore)(reducers, (0, redux_1.applyMiddleware)(redux_thunk_1.default));
// window.store = store;
exports.default = store;
//# sourceMappingURL=redux-store.js.map