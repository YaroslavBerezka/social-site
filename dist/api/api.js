"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityAPI = exports.profileAPI = exports.authAPI = exports.usersAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const instance = axios_1.default.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3", },
});
// 5504bf50-94e1-46b0-9719-7b9176897272
exports.usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => response.data);
    },
};
exports.authAPI = {
    auth() {
        return instance
            .get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance
            .post(`/auth/login`, { email, password, rememberMe, captcha })
            .then(response => response.data);
    },
    logout() {
        return instance
            .delete(`/auth/login`)
            .then(response => response.data);
    }
};
exports.profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance
            .put(`profile/status`, { status: status })
            .then(response => response.data);
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance
            .put(`profile/photo`, formData, { headers: { 'Content-Type': 'multipart/from-data' } })
            .then(response => response.data);
    },
    saveProfile(profile) {
        return instance
            .put(`profile`, profile)
            .then(response => response.data);
    },
};
exports.securityAPI = {
    getCaptchaUrl() {
        return instance
            .get(`security/get-captcha-url`)
            .then(response => response.data);
    },
};
//# sourceMappingURL=api.js.map