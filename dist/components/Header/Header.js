"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Header_module_css_1 = __importDefault(require("./Header.module.css"));
const react_router_dom_1 = require("react-router-dom");
const Header = (props) => {
    const { login, logout, isAuth } = props;
    return (React.createElement("header", { className: Header_module_css_1.default.header },
        React.createElement(react_router_dom_1.NavLink, { to: "/profile" },
            React.createElement("img", { src: "https://www.rippletraining.com/wp-content/uploads/2018/03/davinci-logo-300x300.png" })),
        React.createElement("div", { className: Header_module_css_1.default.loginBlock }, isAuth
            ? React.createElement("div", null,
                login,
                " - ",
                React.createElement("button", { onClick: logout }, "Log out"))
            : React.createElement(react_router_dom_1.NavLink, { to: "/login", className: navData => navData.isActive ? Header_module_css_1.default.active
                    : Header_module_css_1.default.item }, "Login"))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map