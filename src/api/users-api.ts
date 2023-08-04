import { IUser } from "../interfaces/interfaces"
import { IResponse, instance } from "./api"

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = "", friend: null | boolean = null) {
        return  instance
                     .get<IResponseGetUsers>(`users?page=${currentPage}&count=${pageSize}
                                                &term=${term}` + (friend === null ? "" 
                                                                                  : `&friend=${friend}`))
                     .then(response => response.data);
     },
    unfollow(userId: number) {
        return  instance
                     .delete<IResponse>(`follow/${userId}`)
                     .then(response => response.data);
    },
    follow(userId: number) {
        return  instance
                     .post<IResponse>(`follow/${userId}`)
                     .then(response => response.data);
    },
};

interface IResponseGetUsers {
    items: IUser[]
    totalCount: number
    error: string | null
};