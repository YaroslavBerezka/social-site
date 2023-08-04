export interface IPhotos {
    small: string | null
    large: string | null
};
export interface IProfile {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: IContacts
    photos: IPhotos
};
export interface IPost {
    id: number
    message: string
    likesCount: number
};
export interface IContacts {
    github: string
    vk: string
    facebook: string
    instagram: string 
    twitter: string 
    website: string 
    youtube: string 
    mainLink: string 
};
export type ContactsKeysType = keyof IContacts;
export interface IUser {
    id: number
    name: string
    photos: IPhotos
    status: string | null
    followed: boolean
};
export interface IDialog {
    id: number
    name: string
};
export interface IMessage {
    id: number
    message: string | {newMessageBody: string} 
};
export interface IMessagesPage {
    dialogs: Array<IDialog>;
    messages: Array<IMessage>;
};