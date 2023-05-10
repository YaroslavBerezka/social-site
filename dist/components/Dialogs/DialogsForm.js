"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const redux_form_1 = require("redux-form");
const FormsControls_1 = require("../common/FormsControls/FormsControls");
const validators_1 = require("../../utils/validators/validators");
const Textarea = (0, FormsControls_1.Element)("textarea");
const DialogsForm = (props) => {
    const { handleSubmit } = props;
    return (React.createElement("form", { onSubmit: handleSubmit },
        (0, FormsControls_1.renderField)("newMessageBody", [validators_1.required, (0, validators_1.maxLengthCreator)(50)], Textarea, "Enter your message"),
        React.createElement("div", null,
            React.createElement("button", null, "Send"))));
};
DialogsForm.propType = {
    handleSubmit: prop_types_1.default.func,
};
const DialogsReduxForm = (0, redux_form_1.reduxForm)({
    form: "dialogsForm",
})(DialogsForm);
exports.default = DialogsReduxForm;
//# sourceMappingURL=DialogsForm.js.map