import { Messages } from "./Messages";
import React, {useEffect} from "react";
import { AddMessageForm } from "./AddMessageForm";
import { DispatchType } from "../../redux/redux-store";
import { useDispatch, useSelector } from "react-redux";
import { getStatus } from "../../redux/selectors/chat-selectors";
import { startMessagesListening, stopMessagesListening } from "../../api/thunkMW/thunk-chat";

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