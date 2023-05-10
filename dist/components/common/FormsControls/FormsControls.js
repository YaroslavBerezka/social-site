"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderField = exports.Element = void 0;
const FormsControls_module_css_1 = __importDefault(require("../FormsControls/FormsControls.module.css"));
const Element = (Element) => (_a) => {
    var { input, meta } = _a, props = __rest(_a, ["input", "meta"]);
    const { touched, error } = meta;
    const hasError = touched && error;
    return className = { style: FormsControls_module_css_1.default, : .formControl + " " + (hasError ? FormsControls_module_css_1.default.error : "") } >
        Object.assign({}, input);
    {
        props;
    }
    />;
    {
        hasError && { error } < /span>}
            < /div>;
    }
};
exports.Element = Element;
;
;
const renderField = (name, validators, component, ...args) => {
    const [type, text, placeholder] = args;
    return placeholder = { placeholder };
    name = { name };
    validate = { validators };
    component = { component };
    type = { type } /  > { text }
        < /div>;
};
exports.renderField = renderField;
;
;
//# sourceMappingURL=FormsControls.js.map