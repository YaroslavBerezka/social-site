import { PhotosType, ProfileType } from "../types/types";
import { ResponseType, ResultCodes, instance } from "./api";

export const profileAPI = {
    getProfile(userId: number) {
        return  instance
                     .get<ProfileType>(`profile/${userId}`)
                     .then(response => response.data);
    },
    getStatus(userId: number) {
        return  instance
                     .get<string>(`profile/status/${userId}`)
                     .then(response => response.data);
    },
    updateStatus(status: string) {
        return  instance
                    .put<ResponseType>(`profile/status`, {status: status})
                    .then(response => response.data);
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);

        return  instance
                    .put<ResponseSavePhotoType>(`profile/photo`, formData,  {headers : {'Content-Type': 'multipart/from-data'}})
                    .then(response => response.data);
    },
    saveProfile(profile: ProfileType) {
        return  instance
                    .put<ResponseType>(`profile`, profile)
                    .then(response => response.data);
    },
};

type ResponseSavePhotoType = {
    data: {
        photos: PhotosType
    }
    resultCode: ResultCodes
    messages: Array<string>
};
