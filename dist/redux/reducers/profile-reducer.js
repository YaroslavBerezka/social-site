"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPhotoSuccess = exports.setStatus = exports.setUserProfile = exports.removePost = exports.addPost = void 0;
const ADD_POST = "ADD-POST";
const SET_STATUS = "SET_STATUS";
const REMOVE_POST = "REMOVE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";
const initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 23 },
        { id: 2, message: `It's my first post`, likesCount: 1500 },
    ],
    profile: null,
    editModeSuccess: false,
    status: "",
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return Object.assign(Object.assign({}, state), { posts: [
                    ...state.posts,
                    { id: state.posts.length + 1,
                        message: action.payload,
                        likesCount: 0, },
                ] });
        }
        case REMOVE_POST:
            return Object.assign(Object.assign({}, state), { posts: state.posts.filter((_, index) => index !== state.posts.length - 1), newPostText: "" });
        case SET_USER_PROFILE:
            return Object.assign(Object.assign({}, state), { profile: action.payload });
        case SET_STATUS:
            return Object.assign(Object.assign({}, state), { status: action.payload });
        case SET_PHOTO_SUCCESS:
            return Object.assign(Object.assign({}, state), { profile: Object.assign(Object.assign({}, state.profile), { photos: action.payload }) });
        default:
            return state;
    }
    ;
};
const addPost = (newPostText) => ({ type: ADD_POST, payload: newPostText });
exports.addPost = addPost;
const removePost = (postId) => ({ type: REMOVE_POST, payload: postId });
exports.removePost = removePost;
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, payload: profile });
exports.setUserProfile = setUserProfile;
const setStatus = (status) => ({ type: SET_STATUS, payload: status });
exports.setStatus = setStatus;
const setPhotoSuccess = (photos) => ({ type: SET_PHOTO_SUCCESS, payload: photos });
exports.setPhotoSuccess = setPhotoSuccess;
exports.default = profileReducer;
//# sourceMappingURL=profile-reducer.js.map