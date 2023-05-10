import {v1} from "uuid";
import { InferActionsTypes } from "../redux-store";
import { ChatMessageType, StatusType } from "../../api/chat-api";

const initialState = {
  messages: [] as ChatMessageReducerType[],
  status: 'pending' as StatusType
};

export const chatReducer = (state = initialState, action: ActionsChatTypes): InitialStateType => {
  switch(action.type) {
    case "chat/MESSAGES_RECEIVED":
        return {
            ...state,
            messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))]
                                                                    .filter((m, index, array) => index >= array.length - 100)    
        }
    case "chat/STATUS_CHANGED":
        return {
            ...state,
            status: action.payload.status       
        }
    default:
        return state;
  };   
};

export const actionsChat = {
  messagesReceived: (messages: ChatMessageType[]) => ({ type: "chat/MESSAGES_RECEIVED", payload: {messages} } as const),
  statusChanged: (status: StatusType) => ({ type: "chat/STATUS_CHANGED", payload: {status} } as const),
};

type InitialStateType = typeof initialState;
export type ActionsChatTypes = InferActionsTypes<typeof actionsChat>;
type ChatMessageReducerType = ChatMessageType & {id: string};
