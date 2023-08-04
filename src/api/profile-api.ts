import { IPhotos, IProfile } from "../interfaces/interfaces"
import { IResponse, ResultCodes, instance } from "./api"

export const profileAPI = {
    getProfile(userId: number) {
        return  instance
                     .get<IProfile>(`profile/${userId}`)
                     .then(response => response.data);
    },
    getStatus(userId: number) {
        return  instance
                     .get<string>(`profile/status/${userId}`)
                     .then(response => response.data);
    },
    updateStatus(status: string) {
        return  instance
                    .put<IResponse>(`profile/status`, {status: status})
                    .then(response => response.data);
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return  instance
                    .put<IResponseSavePhoto>(`profile/photo`, formData,  {headers : {'Content-Type': 'multipart/from-data'}})
                    .then(response => response.data);
    },
    saveProfile(profile: IProfile) {
        return  instance
                    .put<IResponse>(`profile`, profile)
                    .then(response => response.data);
    },
};

interface IResponseSavePhoto {
    data: {
        photos: IPhotos
    }
    resultCode: ResultCodes
    messages: string[]
};
