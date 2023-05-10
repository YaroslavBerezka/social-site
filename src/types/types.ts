export type PhotosType = {
    small: string | null
    large: string | null
};
export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
};
export type PostType = {
    id: number
    message: string
    likesCount: number
};
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string 
    twitter: string 
    website: string 
    youtube: string 
    mainLink: string 
};
export type ContactsKeysType = keyof ContactsType;
export type UserType = {
    id: number
    name: string
    photos: PhotosType
    status: string | null
    followed: boolean
};
export type DialogType = {
    id: number
    name: string
};
export type MessageType = {
    id: number
    message: string | {newMessageBody: string} 
};
export type MessagesPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
};