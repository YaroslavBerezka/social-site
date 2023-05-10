"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_module_css_1 = __importDefault(require("./Post.module.css"));
const prop_types_1 = __importDefault(require("prop-types"));
const Post = (props) => {
    const { message, likesCount } = props;
    return (React.createElement("div", { className: Post_module_css_1.default.item },
        React.createElement("img", { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7dAw7j8Ny5lAQLle2k3iWadcwoUeLqeAKA&usqp=CAU" }),
        message,
        React.createElement("div", null,
            React.createElement("span", null, "like"),
            " ",
            likesCount)));
};
Post.propsTypes = {
    message: prop_types_1.default.string.isRequired,
    likesCount: prop_types_1.default.number.isRequired,
};
exports.default = Post;
//# sourceMappingURL=Post.js.map