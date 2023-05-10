import { ResponseTypeWithCaptcha, ResultCodeFromCaptcha, ResultCodes, instance } from "./api";

export const authAPI = {
    auth() {
        return  instance
                     .get<ResponseMeType>(`auth/me`)
                     .then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return  instance
                     .post<ResponseLoginType>(`/auth/login`, {email, password, rememberMe, captcha})
                     .then(response => response.data);
    },
    logout() {
        return  instance
                     .delete<ResponseTypeWithCaptcha>(`/auth/login`)
                     .then(response => response.data);
    }
};

type ResponseMeType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodes
    messages: Array<string>
};
type ResponseLoginType = {
    data: {
        userId: number
    }
    resultCode: ResultCodes | ResultCodeFromCaptcha
    messages: Array<string>
};