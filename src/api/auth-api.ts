import { IResponseWithCaptcha, ResultCodeFromCaptcha, ResultCodes, instance } from "./api"

export const authAPI = {
    auth() {
        return  instance
                     .get<IResponseMe>(`auth/me`)
                     .then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return  instance
                     .post<IResponseLogin>(`/auth/login`, {email, password, rememberMe, captcha})
                     .then(response => response.data);
    },
    logout() {
        return  instance
                     .delete<IResponseWithCaptcha>(`/auth/login`)
                     .then(response => response.data);
    }
};

interface IResponseMe {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodes
    messages: string[]
};
interface IResponseLogin {
    data: {
        userId: number
    }
    resultCode: ResultCodes | ResultCodeFromCaptcha
    messages: string[]
};