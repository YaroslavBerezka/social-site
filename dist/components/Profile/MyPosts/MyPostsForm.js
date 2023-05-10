"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const redux_form_1 = require("redux-form");
const FormsControls_1 = require("../../common/FormsControls/FormsControls");
const FormsControls_2 = require("../../common/FormsControls/FormsControls");
const validators_1 = require("../../../utils/validators/validators");
const Textarea = (0, FormsControls_1.Element)("textarea");
const MyPostsForm = (props) => {
    const { handleSubmit } = props;
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        (0, FormsControls_2.renderField)("newPostElement", [validators_1.required, (0, validators_1.maxLengthCreator)(10)], Textarea, "Post message"),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", null, "Add post"))));
};
MyPostsForm.propTypes = {
    handleSubmit: prop_types_1.default.func,
};
const PostsReduxForm = (0, redux_form_1.reduxForm)({
    form: "postsForm"
})(MyPostsForm);
exports.default = PostsReduxForm;
//# sourceMappingURL=MyPostsForm.js.map