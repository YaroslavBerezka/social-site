import { profileAPI } from "../../api/api";


const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS"

let initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: 23},
    {id: 2, message: `It's my first post`, likesCount: 1500},
    ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {id: state.posts.length + 1,
          message: action.payload,
          likesCount: 0,},
        ],
      }; 
    }       
    case REMOVE_POST:  
      return {
        ...state,
        posts: state.posts.filter((_,index) => index !== state.posts.length - 1),
        newPostText: "",
      }; 
    case SET_USER_PROFILE: 
      return {
        ...state,
        profile: action.payload,
      };
    case SET_STATUS: 
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
    
};

export const addPost = (newPostText) => 
             ({type: ADD_POST, payload: newPostText});
export const removePost = (postId) => 
             ({type: REMOVE_POST, payload: postId });
export const setUserProfile = (profile) => 
             ({type: SET_USER_PROFILE, payload: profile });
export const setStatus = (status) => 
             ({type: SET_STATUS, payload: status });


export const getUserProfile = (userId) => async (dispatch) => {
  const data =  await profileAPI.getProfile(userId);

              dispatch(setUserProfile(data));
}
export const getStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);

             dispatch(setStatus(data));            
} 
export const updateStatus = (status) => async (dispatch) => {
  const data = await  profileAPI.updateStatus(status);

             if(data.resultCode === 0) {
                dispatch(setStatus(status));
              }        
}

export default profileReducer;