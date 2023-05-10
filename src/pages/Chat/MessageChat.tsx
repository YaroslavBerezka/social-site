import React from "react";
import { ChatMessageType } from "../../api/chat-api";

export const MessageChat: React.FC<PropsType> = React.memo((props) => {
    const {message} = props;

    return (
        <div>
            <img src={message.photo as string} style={{width: '30px'}}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    );
});

type PropsType = {
    message: ChatMessageType
};