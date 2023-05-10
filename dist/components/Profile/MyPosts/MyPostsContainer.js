"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MyPosts_1 = __importDefault(require("./MyPosts"));
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const profile_reducer_1 = require("../../../redux/reducers/profile-reducer");
const myPosts_selectors_1 = require("../../../redux/selectors/myPosts-selectors");
const mapStateToProps = (state) => {
    return {
        posts: (0, myPosts_selectors_1.getPosts)(state),
    };
};
exports.default = (0, redux_1.compose)((0, react_redux_1.connect)(mapStateToProps, { addPost: profile_reducer_1.addPost }))(MyPosts_1.default);
//# sourceMappingURL=MyPostsContainer.js.map