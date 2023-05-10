"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const redux_form_1 = require("redux-form");
const ProfileInfo_module_css_1 = __importDefault(require("./ProfileInfo.module.css"));
const FormsControls_1 = require("../../common/FormsControls/FormsControls");
const Input = (0, FormsControls_1.Element)("input");
const Textarea = (0, FormsControls_1.Element)("textarea");
const ProfileDataForm = (props) => {
    const { handleSubmit, error, profile } = props;
    return (React.createElement("form", { className: ProfileInfo_module_css_1.default.contacts, onSubmit: handleSubmit },
        React.createElement("div", null,
            React.createElement("button", null, "Save")),
        error && React.createElement("div", { className: ProfileInfo_module_css_1.default.formSummaryError }, error),
        React.createElement("div", null,
            React.createElement("b", null, "Full name:"),
            " ",
            (0, FormsControls_1.renderField)("fullName", [], Input, null, null, "Full name")),
        React.createElement("div", null,
            React.createElement("b", null, "Looking for a job:"),
            " ",
            (0, FormsControls_1.renderField)("lookingForAJob", [], Input, "checkbox", null, null)),
        React.createElement("div", null,
            React.createElement("b", null, "My professional skills:"),
            " ",
            (0, FormsControls_1.renderField)("lookingForAJobDescription", [], Textarea, null, null, "My professional skills")),
        React.createElement("div", null,
            React.createElement("b", null, "About me:"),
            " ",
            (0, FormsControls_1.renderField)("aboutMe", [], Textarea, null, null, "About me")),
        React.createElement("div", null,
            React.createElement("b", null, "Contacts:"),
            " ",
            Object.keys(profile.contacts).map(key => {
                return React.createElement("div", { className: ProfileInfo_module_css_1.default.contact, key: key },
                    React.createElement("b", null,
                        key,
                        ": ",
                        (0, FormsControls_1.renderField)("contacts." + key.toLocaleLowerCase(), [], Input, null, null, key)));
            }))));
};
ProfileDataForm.propTypes = {
    profile: prop_types_1.default.object,
};
const ProfileDataReduxForm = (0, redux_form_1.reduxForm)({
    form: "edit-profile",
    enableReinitialize: true,
    destroyOnUnmount: false
})(ProfileDataForm);
exports.default = ProfileDataReduxForm;
//# sourceMappingURL=ProfileDataForm.js.map