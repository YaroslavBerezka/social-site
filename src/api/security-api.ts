import { instance } from "./api";

export const securityAPI = {
    getCaptchaUrl() {
        return  instance
                     .get<ResponseGetCaptchaUrlType>(`security/get-captcha-url`)
                     .then(response => response.data);
    },
};

type ResponseGetCaptchaUrlType = {
    url: string
};