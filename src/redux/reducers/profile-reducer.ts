import { InferActionsTypes } from "../redux-store";
import { PhotosType, PostType, ProfileType } from "../../types/types";

const initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 23},
    {id: 2, message: "It's my first post", likesCount: 1500},
    ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
};

const profileReducer = (state = initialState, action: ActionsProfileTypes): InitialStateType => {
  
  switch(action.type) {
    case "profile/ADD-POST": {
      return {
        ...state,
        posts: [
          ...state.posts,
          {id: state.posts.length + 1,
          message: action.payload.newPostText,
          likesCount: 0,},
        ],
      }; 
    }       
    case "profile/REMOVE-POST":  
      return {
        ...state,
        posts: state.posts.filter((_: any,index: any) => index !== state.posts.length - 1),
      }; 
    case "profile/SET_USER_PROFILE": 
      return {
        ...state,
        profile: action.payload.profile,
      };
    case "profile/SET_STATUS": 
      return {
        ...state,
        status: action.payload.status,
      };
    case "profile/SET_PHOTO_SUCCESS":
      return {
        ...state,
        profile: {...state.profile, photos: action.payload.photos} as ProfileType,
      };
    default:
      return state;
  }; 
};

export const actionsProfile = {
  addPost: (newPostText: string) => 
    ({type: "profile/ADD-POST", payload: {newPostText}} as const),
  removePost: (postId: number) => 
    ({type: "profile/REMOVE-POST", payload: {postId}} as const),
  setUserProfile: (profile: ProfileType) => 
    ({type: "profile/SET_USER_PROFILE", payload: {profile}} as const),
  setStatus: (status: string) => 
    ({type: "profile/SET_STATUS", payload: {status}} as const),
  setPhotoSuccess: (photos: PhotosType) => 
    ({type: "profile/SET_PHOTO_SUCCESS", payload: {photos}} as const),
};

export default profileReducer;

type InitialStateType = typeof initialState;
export type ActionsProfileTypes = InferActionsTypes<typeof actionsProfile>;