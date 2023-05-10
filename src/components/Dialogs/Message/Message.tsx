import React from "react";
import style from "./Message.module.css";

const Message: React.FC<PropsType> = (props) => {
    const {message} = props;

    return ( 
        <div>
            <div className={style.message}>{message as string}</div>
        </div>     
    );
};

export default Message;

type PropsType = {
    message: string | {newMessageBody: string}
};