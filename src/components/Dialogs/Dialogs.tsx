import React from "react";
import Message from "./Message/Message";
import style from "./Dialogs.module.css";
import DialogsReduxForm from './DialogsForm';
import DialogItem from "./DialogItem/DialogItem";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType } from "../../redux/redux-store";
import { DialogType, MessageType, } from "../../types/types";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { actionsMessages } from "../../redux/reducers/messages-reducer";
import { getMessagePage } from "../../redux/selectors/dialogs-selectors";

const Dialogs: React.FC<PropsDialogsType> = withAuthRedirect(React.memo(() => {
    const messagesPage = useSelector(getMessagePage);
    const dispatch: DispatchType = useDispatch();

    const dialogsElements = 
        messagesPage.dialogs.length === 0 ? "No dialogs" 
                                          : messagesPage.dialogs.map((d: DialogType) => <DialogItem name={d.name} 
                                                                                                    key={d.id} 
                                                                                                    id={d.id} />);
    const messagesElements = 
        messagesPage.messages.length === 0 ? "No messages" 
                                           : messagesPage.messages.map((m: MessageType) =>  <Message message={m.message} 
                                                                                                     key={m.id} />);  
    const addNewMessage = (values: NewDialogsFormType) => {
        dispatch(actionsMessages.sendMessage(values.newMessageBody));
        values.newMessageBody = "";
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}));

export default Dialogs;

export type PropsDialogsType = {
    isAuth?: boolean
    isOwner?: boolean
};
export type NewDialogsFormType = {
    newMessageBody: string
};