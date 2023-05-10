"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFollowingInProgress = exports.getIsFetching = exports.getCurrentPage = exports.getTotalItemsCount = exports.getPageSize = exports.getUsers = void 0;
const reselect_1 = require("reselect");
const getUsersSelector = (state) => {
    return state.usersPage.users;
};
exports.getUsers = (0, reselect_1.createSelector)(getUsersSelector, (users) => {
    return users.filter((u) => true);
});
const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
exports.getPageSize = getPageSize;
const getTotalItemsCount = (state) => {
    return state.usersPage.totalItemsCount;
};
exports.getTotalItemsCount = getTotalItemsCount;
const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
exports.getCurrentPage = getCurrentPage;
const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
exports.getIsFetching = getIsFetching;
const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
exports.getFollowingInProgress = getFollowingInProgress;
//# sourceMappingURL=users-selectors.js.map