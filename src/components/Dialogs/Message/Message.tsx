import React from "react"
import style from "./Message.module.scss"

const Message: React.FC<IProps> = (props) => {
    const {message} = props;

    return ( 
        <div>
            <div className={style.message}>{message as string}</div>
        </div>     
    );
};

export default Message;

interface IProps {
    message: string | {newMessageBody: string}
};