"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppContainer = void 0;
require("./App.css");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const react_1 = __importStar(require("react"));
const News_1 = __importDefault(require("./components/News/News"));
const Music_1 = __importDefault(require("./components/Music/Music"));
const withRouter_1 = require("./hoc/withRouter");
const Navbar_1 = __importDefault(require("./components/Navbar/Navbar"));
const Settings_1 = __importDefault(require("./components/Settings/Settings"));
const thunk_app_1 = require("./api/thunkMW/thunk-app");
const NotFound_1 = require("./components/NotFound/NotFound");
const react_router_dom_1 = require("react-router-dom");
const UsersContainer_1 = __importDefault(require("./components/Users/UsersContainer"));
const Preloader_1 = __importDefault(require("./components/common/Preloader/Preloader"));
const app_selectors_1 = require("./redux/selectors/app-selectors");
const HeaderContainer_1 = __importDefault(require("./components/Header/HeaderContainer"));
const Login = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./components/Login/Login"))));
const DialogsContainer = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./components/Dialogs/DialogsContainer"))));
const ProfileContainer = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./components/Profile/ProfileContainer"))));
const App = (props) => {
    const { initializeApp, initialized } = props;
    (0, react_1.useEffect)(() => {
        initializeApp();
    }, []);
    if (!initialized) {
        return react_1.default.createElement(Preloader_1.default, null);
    }
    ;
    return (react_1.default.createElement("div", { className: "app-wrapper" },
        react_1.default.createElement(HeaderContainer_1.default, null),
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement("div", { className: "app-wrapper-content" },
            react_1.default.createElement(react_1.default.Suspense, { fallback: react_1.default.createElement("div", null,
                    " ",
                    react_1.default.createElement(Preloader_1.default, null),
                    " ") },
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/profile" }) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/profile/:userId?", element: react_1.default.createElement(ProfileContainer, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/dialogs/*", element: react_1.default.createElement(DialogsContainer, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/users", element: react_1.default.createElement(UsersContainer_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/news", element: react_1.default.createElement(News_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/music", element: react_1.default.createElement(Music_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/settings", element: react_1.default.createElement(Settings_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/login", element: react_1.default.createElement(Login, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NotFound_1.NotFound, null) }))))));
};
const mapStateToProps = (state) => ({
    initialized: (0, app_selectors_1.getInitialized)(state),
});
exports.AppContainer = (0, redux_1.compose)(withRouter_1.withRouter, (0, react_redux_1.connect)(mapStateToProps, { initializeApp: thunk_app_1.initializeApp }))(App);
//# sourceMappingURL=App.js.map