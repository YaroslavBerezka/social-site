import { ActionsAppTypes, actionsApp } from "../../redux/reducers/app-reducer"
import { BaseThunkActionType } from '../../redux/redux-store'
import { getAuth } from "./thunk-auth"

export const initializeApp =  (): ThunkActionType => async (dispatch: any) => {
    try {
      const promise = dispatch(getAuth());
      
      await Promise.all([promise])
      .then(() => {
        dispatch(actionsApp.initializedSuccessAC());
      })
    }
    catch(error) {
      //processing some error
    };  
};

type ThunkActionType = BaseThunkActionType<ActionsAppTypes>;