"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const ProfileInfo_module_css_1 = __importDefault(require("../ProfileInfo/ProfileInfo.module.css"));
const Contact = (props) => {
    const { contactTitle, contactValue } = props;
    return (React.createElement("div", { className: ProfileInfo_module_css_1.default.allContact },
        React.createElement("b", null, contactTitle),
        ": ",
        contactValue));
};
exports.Contact = Contact;
//# sourceMappingURL=ProfileContacts.js.map