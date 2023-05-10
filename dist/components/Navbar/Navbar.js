"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Navbar_module_css_1 = __importDefault(require("./Navbar.module.css"));
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    return (React.createElement("nav", { className: Navbar_module_css_1.default.nav },
        React.createElement("div", { className: Navbar_module_css_1.default.item },
            React.createElement(react_router_dom_1.NavLink, { to: "/profile", className: navData => navData.isActive ? Navbar_module_css_1.default.active
                    : Navbar_module_css_1.default.item }, "Profile")),
        React.createElement("div", { className: Navbar_module_css_1.default.item },
            React.createElement(react_router_dom_1.NavLink, { to: "/dialogs", className: navData => navData.isActive ? Navbar_module_css_1.default.active
                    : Navbar_module_css_1.default.item }, "Messages")),
        React.createElement("div", { className: Navbar_module_css_1.default.item },
            React.createElement(react_router_dom_1.NavLink, { to: "/users", className: navData => navData.isActive ? Navbar_module_css_1.default.active
                    : Navbar_module_css_1.default.item }, "Users")),
        React.createElement("div", { className: Navbar_module_css_1.default.item },
            React.createElement(react_router_dom_1.NavLink, { to: "/news", className: navData => navData.isActive ? Navbar_module_css_1.default.active
                    : Navbar_module_css_1.default.item }, "News")),
        React.createElement("div", { className: Navbar_module_css_1.default.item },
            React.createElement(react_router_dom_1.NavLink, { to: "/music", className: navData => navData.isActive ? Navbar_module_css_1.default.active
                    : Navbar_module_css_1.default.item }, "Music")),
        React.createElement("div", { className: Navbar_module_css_1.default.item },
            React.createElement(react_router_dom_1.NavLink, { to: "/settings", className: navData => navData.isActive ? Navbar_module_css_1.default.active
                    : Navbar_module_css_1.default.item }, "Settings"))));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map