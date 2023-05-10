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
exports.saveProfile = exports.savePhoto = exports.updateStatus = exports.getStatus = exports.getUserProfile = void 0;
const api_1 = require("../api");
const redux_form_1 = require("redux-form");
const profile_reducer_1 = require("../../redux/reducers/profile-reducer");
const getUserProfile = (userId) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield api_1.profileAPI.getProfile(userId);
        dispatch((0, profile_reducer_1.setUserProfile)(data));
    }
    catch (error) {
        //processing some error 
    }
    ;
});
exports.getUserProfile = getUserProfile;
const getStatus = (userId) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield api_1.profileAPI.getStatus(userId);
        dispatch((0, profile_reducer_1.setStatus)(data));
    }
    catch (error) {
        //processing some error
    }
    ;
});
exports.getStatus = getStatus;
const updateStatus = (status) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield api_1.profileAPI.updateStatus(status);
        switch (data.resultCode) {
            case 0:
                dispatch((0, profile_reducer_1.setStatus)(status));
        }
        ;
    }
    catch (error) {
        //processing some error
    }
    ;
});
exports.updateStatus = updateStatus;
const savePhoto = (file) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield api_1.profileAPI.savePhoto(file);
        switch (data.resultCode) {
            case 0:
                dispatch((0, profile_reducer_1.setPhotoSuccess)(data.data.photos));
        }
        ;
    }
    catch (error) {
        //processing some error
    }
    ;
});
exports.savePhoto = savePhoto;
const saveProfile = (profile) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield api_1.profileAPI.saveProfile(profile);
        switch (data.resultCode) {
            case 0:
                dispatch((0, exports.getUserProfile)(profile.userId));
                break;
            case 1:
                {
                    const wrongNetwork = data.messages[0]
                        .slice(data.messages[0].indexOf(">") + 1, data.messages[0].indexOf(")"))
                        .toLocaleLowerCase();
                    const message = data.messages.length > 0
                        ? data.messages[0]
                        : "Some error";
                    dispatch((0, redux_form_1.stopSubmit)("edit-profile", {
                        contacts: { [wrongNetwork]: message }
                    }));
                    return Promise.reject(message);
                }
                ;
        }
        ;
    }
    catch (error) {
        //processing some error
    }
    ;
});
exports.saveProfile = saveProfile;
//# sourceMappingURL=thunk-profile.js.map