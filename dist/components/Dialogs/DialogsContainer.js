"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dialogs_1 = __importDefault(require("./Dialogs"));
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const withAuthRedirect_1 = require("../../hoc/withAuthRedirect");
const messages_reducer_1 = require("../../redux/reducers/messages-reducer");
const dialogs_selectors_1 = require("../../redux/selectors/dialogs-selectors");
const mapStateToProps = (state) => {
    return {
        messagesPage: (0, dialogs_selectors_1.getMessagePage)(state),
    };
};
exports.default = (0, redux_1.compose)((0, react_redux_1.connect)(mapStateToProps, { sendMessage: messages_reducer_1.sendMessage }), withAuthRedirect_1.withAuthRedirect)(Dialogs_1.default);
//# sourceMappingURL=DialogsContainer.js.map