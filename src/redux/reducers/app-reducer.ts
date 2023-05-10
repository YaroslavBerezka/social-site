import { InferActionsTypes } from "../redux-store";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action: ActionsAppTypes): InitialStateType => {
  
  switch(action.type) {
    case "app/INITIALIZED_SUCCESS":
        return {
            ...state,
            initialized: true,        
        }
    default:
        return state;
  };   
};

export const actionsApp = {
  initializedSuccessAC: () => ({ type: "app/INITIALIZED_SUCCESS", } as const)
};

export default appReducer;

type InitialStateType = typeof initialState;
export type ActionsAppTypes = InferActionsTypes<typeof actionsApp>;