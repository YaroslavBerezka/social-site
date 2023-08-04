import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { StatusType } from "../../api/chat-api"
import { sendMessage } from "../../api/thunkMW/thunk-chat"
import { DispatchType } from "../../redux/redux-store"

export const AddMessageForm: React.FC<IProps> = React.memo((props) => {
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

interface IProps {
    status: StatusType
};