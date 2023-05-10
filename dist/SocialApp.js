"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialApp = void 0;
const react_1 = __importDefault(require("react"));
const App_1 = require("./App");
const react_redux_1 = require("react-redux");
const redux_store_1 = __importDefault(require("./redux/redux-store"));
const react_router_dom_1 = require("react-router-dom");
const SocialApp = (props) => {
    return react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_redux_1.Provider, { store: redux_store_1.default },
            react_1.default.createElement(App_1.AppContainer, null)));
};
exports.SocialApp = SocialApp;
//# sourceMappingURL=SocialApp.js.map