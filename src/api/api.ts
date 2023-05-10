import axios from "axios";

export const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: { "API-KEY": "5504bf50-94e1-46b0-9719-7b9176897272", },
});

// b1775b2f-c3a5-4509-8dc9-90b5629de7c3

export enum ResultCodes {
    Success = 0,
    Error = 1,
};
export enum ResultCodeFromCaptcha {
    Captcha = 10
};
export type ResponseType = {
    data: {}
    resultCode: ResultCodes
    messages: Array<string>
};
export type ResponseTypeWithCaptcha = {
    data: {}
    resultCode: ResultCodes
    messages: Array<string>
};