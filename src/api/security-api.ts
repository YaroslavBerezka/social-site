import { instance } from "./api"

export const securityAPI = {
    getCaptchaUrl() {
        return  instance
                     .get<IResponseGetCaptchaUrl>(`security/get-captcha-url`)
                     .then(response => response.data);
    },
};

interface IResponseGetCaptchaUrl {
    url: string
};