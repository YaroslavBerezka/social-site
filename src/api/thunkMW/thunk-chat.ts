import { Dispatch } from "redux";
import { FormAction } from "redux-form";
import { BaseThunkActionType } from "../../redux/redux-store";
import { ChatMessageType, StatusType, chatAPI } from "../chat-api";
import { ActionsChatTypes, actionsChat } from "../../redux/reducers/chat-reducer";

let _newMessageHandler: ((messages: ChatMessageType[]) => void) |  null  = null;

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: ChatMessageType[]) => {
            dispatch(actionsChat.messagesReceived(messages));
        }
    }
    
    return _newMessageHandler;
};

let _newStatusChangedHandler: ((status: StatusType) => void) |  null  = null;

const newStatusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_newStatusChangedHandler === null) {
        _newStatusChangedHandler = (status: StatusType) => {
            dispatch(actionsChat.statusChanged(status));
        }
    }
    
    return _newStatusChangedHandler;
};

export const startMessagesListening = (): ThunkActionType => async (dispatch) => {
    try {
        chatAPI.start();
        chatAPI.subscribeOnNewMessages('message-received', newMessageHandlerCreator(dispatch));
        chatAPI.subscribeOnNewMessages('status-changed', newStatusChangedHandlerCreator(dispatch));
    }
    catch(error) {
      //processing some error
    }; 
};
export const stopMessagesListening = (): ThunkActionType => async (dispatch) => {
    try {
        chatAPI.unsubscribeFromNewMessages('message-received', newMessageHandlerCreator(dispatch));
        chatAPI.unsubscribeFromNewMessages('status-changed', newStatusChangedHandlerCreator(dispatch));
        chatAPI.stop()
    }
    catch(error) {
      //processing some error
    }; 
};
export const sendMessage = (message: string): ThunkActionType => async (dispatch) => {
    try {
        chatAPI.sendMessage(message);
    }
    catch(error) {
      //processing some error
    }; 
};

type ThunkActionType = BaseThunkActionType<ActionsChatTypes | FormAction>;