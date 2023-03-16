import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: { "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3", },
});

// 5504bf50-94e1-46b0-9719-7b9176897272

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return  instance
                     .get(`users?page=${currentPage}&count=${pageSize}`)
                     .then(response => response.data);
     },
    unfollow(userId) {
        return  instance
                     .delete(`follow/${userId}`)
                     .then(response => response.data);
    },
    follow(userId) {
        return  instance
                     .post(`follow/${userId}`)
                     .then(response => response.data);
    },
    
};

export const authAPI = {
    auth() {
        return  instance
                     .get(`auth/me`)
                     .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return  instance
                     .post(`/auth/login`, {email, password, rememberMe})
                     .then(response => response.data);
    },
    logout() {
        return  instance
                     .delete(`/auth/login`)
                     .then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return  instance
                     .get(`profile/${userId}`)
                     .then(response => response.data);
    },
    getStatus(userId) {
        return  instance
                     .get(`profile/status/${userId}`)
                     .then(response => response.data);
    },
    updateStatus(status) {
        return  instance
                    .put(`profile/status`, {status: status})
                    .then(response => response.data);
    }
};