import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startMessagesListening, stopMessagesListening } from "../../api/thunkMW/thunk-chat"
import { DispatchType } from "../../redux/redux-store"
import { getStatus } from "../../redux/selectors/chat-selectors"
import { AddMessageForm } from "./AddMessageForm"
import { Messages } from "./Messages"

export const Chat: React.FC = React.memo(() => {
    const dispatch: DispatchType = useDispatch();
    const status= useSelector(getStatus);
    
    useEffect(()=> {
        dispatch(startMessagesListening());
        
        return () => {
            dispatch(stopMessagesListening());
        }
    }, []);
    
    return (
        <div>
            {status === 'error' && <div>Some error. Please refresh page.</div> }
            <>
                <Messages /> 
                <AddMessageForm status={status} />
            </>
        </div>
    );
});