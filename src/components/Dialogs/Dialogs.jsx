import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import DialogsReduxForm from "./DialogsForm";
import PropTypes from 'prop-types';


const Dialogs = (props) => {
    const {messagesPage, sendMessage} = props;

    const dialogsElements = 
        messagesPage.dialogs.length === 0
                    ? "No dialogs" 
                    : messagesPage.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    const messagesElements = 
        messagesPage.messages.length === 0 
                    ? "No messages" 
                    : messagesPage.messages.map(m =>  <Message message={m.message} key={m.id} />);  

    const addNewMessage = (values) => {
        sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

Dialogs.propTypes = {
    isAuth: PropTypes.bool,
    messagesPage: PropTypes.object,
    sendMessage: PropTypes.func,
    removeMessage: PropTypes.func,
};

export default Dialogs;