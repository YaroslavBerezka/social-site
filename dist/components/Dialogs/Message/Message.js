"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_module_css_1 = __importDefault(require("./Message.module.css"));
const Message = (props) => {
    const { message } = props;
    return (React.createElement("div", null,
        React.createElement("div", { className: Message_module_css_1.default.message }, message)));
};
exports.default = Message;
//# sourceMappingURL=Message.js.map