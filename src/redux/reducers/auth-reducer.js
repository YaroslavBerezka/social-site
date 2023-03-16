import { authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case SET_USER_DATA:
        return {
            ...state,
            ...action.payload,        
    }
    default:
      return state;
  }
    
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, 
                                                                   payload: {userId, email, login, isAuth} });

export const getAuth =  () => async (dispatch) => {
  const data =  await authAPI.auth();

  if(data.resultCode === 0) {
    const {id, email, login} = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe);
   
  if(data.resultCode === 0) {
     dispatch(getAuth());
  } else {
  const message = data.messages.length > 0 
                  ? data.messages[0]
                  : "Some error";
    dispatch(stopSubmit("login", {  _error: message  }));
  } 
};

export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();

  if(data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;