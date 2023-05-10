"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const LoginForm_1 = __importDefault(require("./LoginForm"));
const LoginForm_module_css_1 = __importDefault(require("./LoginForm.module.css"));
const react_router_dom_1 = require("react-router-dom");
const thunk_auth_1 = require("../../api/thunkMW/thunk-auth");
const header_selectors_1 = require("../../redux/selectors/header-selectors");
const Login = (props) => {
    const { isAuth, login, captchaUrl } = props;
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };
    if (isAuth)
        return React.createElement(react_router_dom_1.Navigate, { to: '/profile' });
    return (React.createElement("div", { className: LoginForm_module_css_1.default.login },
        React.createElement("h1", null, "Login"),
        React.createElement(LoginForm_1.default, { onSubmit: onSubmit, captchaUrl: captchaUrl })));
};
const mapStateToProps = (state) => ({
    isAuth: (0, header_selectors_1.getIsAuth)(state),
    captchaUrl: (0, header_selectors_1.getCaptchaUrl)(state),
});
exports.default = (0, redux_1.compose)((0, react_redux_1.connect)(mapStateToProps, { login: thunk_auth_1.login }))(Login);
//# sourceMappingURL=Login.js.map