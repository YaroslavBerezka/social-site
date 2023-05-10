"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_reducer_1 = __importStar(require("../redux/reducers/profile-reducer"));
const state = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 23 },
        { id: 2, message: `It's my first post`, likesCount: 1500 },
    ],
};
describe("profile-reducer component", () => {
    test('length of posts should be incremented', () => {
        const action = (0, profile_reducer_1.addPost)("Loshara");
        const newState = (0, profile_reducer_1.default)(state, action);
        expect(newState.posts.length).toBe(3);
    });
    test('after deleting length wouldn\'t be changed if id is incorrect', () => {
        const action = (0, profile_reducer_1.removePost)(1000);
        const newState = (0, profile_reducer_1.default)(state, action);
        expect(newState.posts.length).toBe(1);
    });
    test('message of new post should be correct', () => {
        const action = (0, profile_reducer_1.addPost)("Loshara");
        const newState = (0, profile_reducer_1.default)(state, action);
        expect(newState.posts[2].message).toBe("Loshara");
    });
    test('length of after deleting length of messages should be changed', () => {
        const action = (0, profile_reducer_1.removePost)(1);
        const newState = (0, profile_reducer_1.default)(state, action);
        expect(newState.posts.length).toBe(1);
    });
});
//# sourceMappingURL=profile-reducer.test.js.map