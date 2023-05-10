"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollow = exports.follow = exports.requestUsers = void 0;
const api_1 = require("../api");
const users_reducer_1 = require("../../redux/reducers/users-reducer");
const requestUsers = (page, pageSize) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dispatch((0, users_reducer_1.toggleIsFetching)(true));
        dispatch((0, users_reducer_1.setCurrentPage)(page));
        const data = yield api_1.usersAPI.getUsers(page, pageSize);
        dispatch((0, users_reducer_1.setCurrentPage)(page));
        dispatch((0, users_reducer_1.toggleIsFetching)(false));
        dispatch((0, users_reducer_1.setUsers)(data.items));
        dispatch((0, users_reducer_1.setTotalItemsCount)(data.totalCount));
    }
    catch (error) {
        //processing some error
    }
    ;
});
exports.requestUsers = requestUsers;
const followUnfollowFlow = (dispatch, userId, apiMethod, actionCreator) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dispatch((0, users_reducer_1.toggleFollowingProgress)(true, userId));
        const data = yield apiMethod(userId);
        switch (data.resultCode) {
            case 0:
                dispatch(actionCreator(userId));
        }
        dispatch((0, users_reducer_1.toggleFollowingProgress)(false, userId));
    }
    catch (error) {
        //processing some error
    }
    ;
});
const follow = (userId) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        followUnfollowFlow(dispatch, userId, api_1.usersAPI.follow.bind(api_1.usersAPI), users_reducer_1.followSuccess);
    }
    catch (error) {
        //processing some error
    }
    ;
});
exports.follow = follow;
const unfollow = (userId) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        followUnfollowFlow(dispatch, userId, api_1.usersAPI.unfollow.bind(api_1.usersAPI), users_reducer_1.unfollowSuccess);
    }
    catch (error) {
        //processing some error
    }
    ;
});
exports.unfollow = unfollow;
//# sourceMappingURL=thunk-users.js.map