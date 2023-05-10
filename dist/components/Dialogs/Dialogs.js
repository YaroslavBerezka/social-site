"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const Message_1 = __importDefault(require("./Message/Message"));
const Dialogs_module_css_1 = __importDefault(require("./Dialogs.module.css"));
const DialogsForm_1 = __importDefault(require("./DialogsForm"));
const DialogItem_1 = __importDefault(require("./DialogItem/DialogItem"));
const Dialogs = (props) => {
    const { messagesPage, sendMessage } = props;
    const dialogsElements = messagesPage.dialogs.length === 0 ? "No dialogs"
        : messagesPage.dialogs.map(d => React.createElement(DialogItem_1.default, { name: d.name, key: d.id, id: d.id }));
    const messagesElements = messagesPage.messages.length === 0 ? "No messages"
        : messagesPage.messages.map(m => React.createElement(Message_1.default, { message: m.message, key: m.id }));
    const addNewMessage = (values) => {
        sendMessage(values.newMessageBody);
    };
    return (React.createElement("div", { className: Dialogs_module_css_1.default.dialogs },
        React.createElement("div", { className: Dialogs_module_css_1.default.dialogsItems }, dialogsElements),
        React.createElement("div", { className: Dialogs_module_css_1.default.messages },
            React.createElement("div", null, messagesElements),
            React.createElement(DialogsForm_1.default, { onSubmit: addNewMessage }))));
};
Dialogs.propTypes = {
    isAuth: prop_types_1.default.bool,
    messagesPage: prop_types_1.default.object,
    sendMessage: prop_types_1.default.func,
    removeMessage: prop_types_1.default.func,
};
exports.default = Dialogs;
//# sourceMappingURL=Dialogs.js.map