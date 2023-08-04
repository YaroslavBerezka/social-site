import { IDialog, IMessage } from "../../interfaces/interfaces"
import { InferActionsTypes } from "../redux-store"

const initialState = {
    dialogs: [
        {id: 1, name: "Anton",},
        {id: 2, name: "Yaroslav",},
        {id: 3, name: "Ivan",},
        {id: 4, name: "Sveta",}, 
        {id: 5, name: "Misha",},
        {id: 6, name: "Volodya",},
        ] as IDialog[],
    messages: [
        {id: 1, message: "Hi",},
        {id: 2, message: "How is your it-kamasutra?",},
        {id: 3, message: "Yo",},
        {id: 4, message: "Yo",}, 
        {id: 5, message: "Yo",},
        {id: 6, message: "Yo",},
        ] as IMessage[],
};

const messagesReducer = (state = initialState , action: ActionsMessagesTypes): InitialStateType => {
    switch(action.type) {
        case "messages/SEND-MESSAGE":
            return {
                ...state,
                messages: [
                    ...state.messages, 
                    {id: state.messages.length + 1,
                     message: action.payload.newMessageBody,},
                ],
            };
        default:
            return state;
    }; 
};

export const actionsMessages = {
    sendMessage: (newMessageBody: string) => ({type: "messages/SEND-MESSAGE", payload: { newMessageBody }} as const)
};

export default messagesReducer;

type InitialStateType = typeof initialState;
export type ActionsMessagesTypes = InferActionsTypes<typeof actionsMessages>;