import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StatusType } from "../../api/chat-api";
import { DispatchType } from "../../redux/redux-store";
import { sendMessage } from "../../api/thunkMW/thunk-chat";

export const AddMessageForm: React.FC<PropsType> = React.memo((props) => {
    const {status} = props;
    const [message, setMessage] = useState('');
    const dispatch: DispatchType = useDispatch();

    const sendMessageHandler = () => {
        if(!message) {
            return
        } 
        dispatch(sendMessage(message));
        setMessage('');
    };
    
    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}/>
            </div>
            <div>
                <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
            </div> 
        </div>
    );
});

type PropsType = {
    status: StatusType
};