"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_form_1 = require("redux-form");
const LoginForm_module_css_1 = __importDefault(require("./LoginForm.module.css"));
const FormsControls_1 = require("../common/FormsControls/FormsControls");
const FormsControls_2 = require("../common/FormsControls/FormsControls");
const validators_1 = require("../../utils/validators/validators");
const Input = (0, FormsControls_1.Element)("input");
const LoginForm = (props) => {
    const { handleSubmit, error, captchaUrl } = props;
    return (React.createElement("form", { onSubmit: handleSubmit, className: LoginForm_module_css_1.default.form },
        (0, FormsControls_2.renderField)("email", [validators_1.required, (0, validators_1.maxLengthCreator)(20)], Input, null, null, "Email"),
        (0, FormsControls_2.renderField)("password", [validators_1.required, (0, validators_1.maxLengthCreator)(20)], Input, "password", null, "Password"),
        (0, FormsControls_2.renderField)("rememberMe", [], Input, "checkbox", "remember me"),
        captchaUrl && React.createElement("img", { className: LoginForm_module_css_1.default.captchaUrl, src: captchaUrl }),
        captchaUrl && (0, FormsControls_2.renderField)("captcha", [validators_1.required], Input, null, null, "Symbols of image"),
        error && React.createElement("div", { className: LoginForm_module_css_1.default.formSummaryError }, error),
        React.createElement("div", null,
            React.createElement("button", null, "Login"))));
};
const LoginReduxForm = (0, redux_form_1.reduxForm)({
    form: "login",
})(LoginForm);
exports.default = LoginReduxForm;
//# sourceMappingURL=LoginForm.js.map