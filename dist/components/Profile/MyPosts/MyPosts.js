"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Post_1 = __importDefault(require("./Posts/Post"));
const prop_types_1 = __importDefault(require("prop-types"));
const MyPosts_module_css_1 = __importDefault(require("./MyPosts.module.css"));
const MyPostsForm_1 = __importDefault(require("./MyPostsForm"));
const MyPosts = react_1.default.memo((props) => {
    const { posts, addPost } = props;
    const postsElements = posts.length === 0 ? "No posts"
        : props.posts.map(p => react_1.default.createElement(Post_1.default, { message: p.message, key: p.id, likesCount: p.likesCount }));
    const addNewPost = (values) => {
        addPost(values.newPostElement);
    };
    return (react_1.default.createElement("div", { className: MyPosts_module_css_1.default.postsBlock },
        react_1.default.createElement("h3", null, "My post"),
        react_1.default.createElement(MyPostsForm_1.default, { onSubmit: addNewPost }),
        react_1.default.createElement("div", { className: MyPosts_module_css_1.default.posts }, postsElements)));
});
MyPosts.propTypes = {
    addPost: prop_types_1.default.func.isRequired,
    removePost: prop_types_1.default.func,
    posts: prop_types_1.default.array.isRequired,
};
exports.default = MyPosts;
//# sourceMappingURL=MyPosts.js.map