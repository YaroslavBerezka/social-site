import { authAPI } from "../auth-api";
import { securityAPI } from "../security-api";
import { FormAction, stopSubmit } from "redux-form";
import { ResultCodeFromCaptcha, ResultCodes } from "../api";
import { BaseThunkActionType } from '../../redux/redux-store';
import { ActionsAuthType, actionsAuth } from "../../redux/reducers/auth-reducer";

export const getAuth = (): ThunkActionType => async (dispatch) => {
    try {
      const data =  await authAPI.auth();
  
      switch(data.resultCode as ResultCodes) {
        case ResultCodes.Success:
          const {id, email, login} = data.data;
          dispatch(actionsAuth.authUserDataAC(id, email, login, true));
      }
    } 
    catch(error) {
      //processing some error 
    };
};
  
export const login = (email: string, password: string,
                      rememberMe: boolean, captcha: null | string = null ): ThunkActionType => async (dispatch) => {
    try {
      const data = await authAPI.login(email, password, rememberMe, captcha);
  
      switch(data.resultCode as ResultCodes | ResultCodeFromCaptcha) {
        case ResultCodes.Success: 
          dispatch(getAuth());
        case ResultCodes.Error:
          dispatch(stopSubmit("login", {_error: data.messages[0]}));
        case ResultCodeFromCaptcha.Captcha:
          dispatch(getCaptchaUrl());
      }
    } 
    catch(error) {
      //processing some error 
    };
};
  
  
export const getCaptchaUrl = (): ThunkActionType => async (dispatch) => {
    try {
      const data = await securityAPI.getCaptchaUrl();
      const captchaUrl = data.url;
      
      dispatch(actionsAuth.captchaUrlAC(captchaUrl));
    }
    catch(error) {
      //processing some error 
    };
};
  
export const getLogout = (): ThunkActionType => async (dispatch) => {
    try {
      const data = await authAPI.logout();
  
      switch(data.resultCode as ResultCodes) {
        case ResultCodes.Success:
          dispatch(actionsAuth.authUserDataAC(null, null, null, false));
          dispatch(actionsAuth.captchaUrlAC(""));
      }
    }
    catch(error) {
      //processing some error 
    }; 
};

type ThunkActionType = BaseThunkActionType<ActionsAuthType | FormAction>;