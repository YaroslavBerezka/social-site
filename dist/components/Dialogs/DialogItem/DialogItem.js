"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __importDefault(require("classnames"));
const DialogItem_module_css_1 = __importDefault(require("./DialogItem.module.css"));
const react_router_dom_1 = require("react-router-dom");
const DialogItem = (props) => {
    const { id, name } = props;
    const path = "/dialogs/" + id;
    return (React.createElement("div", { className: (0, classnames_1.default)(DialogItem_module_css_1.default.dialog, DialogItem_module_css_1.default.active) },
        React.createElement(react_router_dom_1.NavLink, { to: path, className: navData => navData.isActive ? DialogItem_module_css_1.default.active
                : DialogItem_module_css_1.default.dialog }, name)));
};
exports.default = DialogItem;
//# sourceMappingURL=DialogItem.js.map