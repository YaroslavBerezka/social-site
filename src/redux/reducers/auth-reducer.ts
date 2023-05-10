import { InferActionsTypes } from "../redux-store";

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

const authReducer = (state = initialState, action: ActionsAuthType): InitialStateType => {
  switch(action.type) {
    case "auth/SET_USER_DATA":
    case "auth/CAPTCHA_URL":
        return {
            ...state,
            ...action.payload,        
        }
    default:
        return state;
  };  
};

export const actionsAuth = {
  authUserDataAC: (userId: number | null, email: string | null,
                   login: string | null, isAuth: boolean) => ({type: "auth/SET_USER_DATA", 
                                                               payload: {userId, email, 
                                                                         login, isAuth} } as const ),
  captchaUrlAC: (captchaUrl: string) => ({type: "auth/CAPTCHA_URL", 
                                          payload: { captchaUrl } } as const )
};

export default authReducer;

type InitialStateType = typeof initialState;
export type ActionsAuthType = InferActionsTypes<typeof actionsAuth>;