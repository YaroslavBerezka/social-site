import s from "./Message.module.css";

const Message = (props) => {
    const {message} = props;

    return ( 
        <div>
            <div className={s.message}>{message}</div>
        </div>     
    );
}

export default Message;