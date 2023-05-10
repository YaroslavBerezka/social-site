"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleFollowingProgress = exports.toggleIsFetching = exports.setTotalItemsCount = exports.setCurrentPage = exports.setUsers = exports.unfollowSuccess = exports.followSuccess = void 0;
const objects_helpers_1 = require("../../utils/objects-helpers");
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_TOTAL_ITEMS_COUNT = "SET_TOTAL_ITEMS_COUNT";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";
const initialState = {
    users: [],
    pageSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return Object.assign(Object.assign({}, state), { users: (0, objects_helpers_1.updateObjectInArray)(state.users, action.payload, "id", { followed: true }) });
        case UNFOLLOW:
            return Object.assign(Object.assign({}, state), { users: (0, objects_helpers_1.updateObjectInArray)(state.users, action.payload, "id", { followed: false }) });
        case SET_USERS:
            return Object.assign(Object.assign({}, state), { users: action.payload });
        case SET_CURRENT_PAGE:
            return Object.assign(Object.assign({}, state), { currentPage: action.payload });
        case SET_TOTAL_ITEMS_COUNT:
            return Object.assign(Object.assign({}, state), { totalItemsCount: action.payload });
        case TOGGLE_IS_FETCHING:
            return Object.assign(Object.assign({}, state), { isFetching: action.payload });
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return Object.assign(Object.assign({}, state), { followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId) });
        default:
            return state;
    }
    ;
};
const followSuccess = (userId) => ({ type: FOLLOW, payload: userId });
exports.followSuccess = followSuccess;
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, payload: userId });
exports.unfollowSuccess = unfollowSuccess;
const setUsers = (users) => ({ type: SET_USERS, payload: users });
exports.setUsers = setUsers;
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: currentPage });
exports.setCurrentPage = setCurrentPage;
const setTotalItemsCount = (totalItemsCount) => ({ type: SET_TOTAL_ITEMS_COUNT, payload: totalItemsCount });
exports.setTotalItemsCount = setTotalItemsCount;
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, payload: isFetching });
exports.toggleIsFetching = toggleIsFetching;
const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: { isFetching, userId } });
exports.toggleFollowingProgress = toggleFollowingProgress;
exports.default = usersReducer;
//# sourceMappingURL=users-reducer.js.map