import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { IDialog, IMessage } from "../../interfaces/interfaces"
import { actionsMessages } from "../../redux/reducers/messages-reducer"
import { DispatchType } from "../../redux/redux-store"
import { getMessagePage } from "../../redux/selectors/dialogs-selectors"
import DialogItem from "./DialogItem/DialogItem"
import style from "./Dialogs.module.scss"
import DialogsReduxForm from './DialogsForm'
import Message from "./Message/Message"

const Dialogs: React.FC<IPropsDialogs> = withAuthRedirect(React.memo(() => {
    const messagesPage = useSelector(getMessagePage);
    const dispatch: DispatchType = useDispatch();

    const dialogsElements = 
        messagesPage.dialogs.length === 0 ? "No dialogs" 
                                          : messagesPage.dialogs.map((d: IDialog) => <DialogItem name={d.name} 
                                                                                                    key={d.id} 
                                                                                                    id={d.id} />);
    const messagesElements = 
        messagesPage.messages.length === 0 ? "No messages" 
                                           : messagesPage.messages.map((m: IMessage) =>  <Message message={m.message} 
                                                                                                     key={m.id} />);  
    const addNewMessage = (values: INewDialogsForm) => {
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

export interface IPropsDialogs {
    isAuth?: boolean
    isOwner?: boolean
};
export interface INewDialogsForm {
    newMessageBody: string
};