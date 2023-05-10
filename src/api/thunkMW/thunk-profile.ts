import { ResultCodes } from "../api";
import { profileAPI } from "../profile-api";
import { ProfileType } from "../../types/types";
import { FormAction, stopSubmit } from "redux-form";
import { BaseThunkActionType } from '../../redux/redux-store';
import { ActionsProfileTypes, actionsProfile } from "../../redux/reducers/profile-reducer";

export const getUserProfile = (userId: number): ThunkActionType => async (dispatch) => {
    try {
      const data =  await profileAPI.getProfile(userId);
  
      dispatch(actionsProfile.setUserProfile(data));
    }
    catch(error) {
      //processing some error 
    };
};
  
export const getStatus = (userId: number): ThunkActionType => async (dispatch) => {
    try {
      const data = await profileAPI.getStatus(userId);
  
      dispatch(actionsProfile.setStatus(data));  
    }
    catch(error) {
      //processing some error
    };           
};
  
export const updateStatus = (status: string): ThunkActionType => async (dispatch) => {
    try {
      const data = await  profileAPI.updateStatus(status);
  
      switch(data.resultCode ) {
       case 0:
         dispatch(actionsProfile.setStatus(status));
       };     
    }
    catch(error) {
      //processing some error
    }; 
};
  
export const savePhoto = (file: File): ThunkActionType => async (dispatch, getState) => {
    try {
      const data = await  profileAPI.savePhoto(file);

      switch(data.resultCode as ResultCodes) {
       case ResultCodes.Success:
         dispatch(actionsProfile.setPhotoSuccess(data.data.photos));
         dispatch(getUserProfile(getState().auth.userId as number));
       };
    }
    catch(error) {
      //processing some error
    };     
};
  
export const saveProfile = (profile: ProfileType): ThunkActionType => async (dispatch) => {
    try {
      const data = await profileAPI.saveProfile(profile);
  
      switch(data.resultCode as ResultCodes) {
        case ResultCodes.Success:
          dispatch(getUserProfile(profile.userId));
          break;
        case ResultCodes.Error: {
          const wrongNetwork = data.messages[0]
                                  .slice(
                                    data.messages[0].indexOf(">") + 1,
                                    data.messages[0].indexOf(")")
                                    )
                                  .toLocaleLowerCase();
          const message = data.messages.length > 0 
                          ? data.messages[0]
                          : "Some error";
          dispatch(stopSubmit("edit-profile", {
                              contacts: {[wrongNetwork]: message}
          }));
        return Promise.reject(message);
        };
       }; 
    }
    catch(error) {
      //processing some error
    };
};
  
type ThunkActionType = BaseThunkActionType<ActionsProfileTypes | FormAction>;