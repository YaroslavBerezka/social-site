import React from "react";
import { NewDialogsFormType } from "./Dialogs";
import { InjectedFormProps, reduxForm } from "redux-form";
import { Element, GetStringKeys, renderField } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Textarea = Element("textarea");

const DialogsForm: React.FC<InjectedFormProps<NewDialogsFormType, PropsType> & PropsType> = React.memo((props) => {
    const {handleSubmit} = props;
    
    return (
        <form onSubmit={handleSubmit}>
            {renderField<KeysDialogsType>("newMessageBody", [required, maxLengthCreator(50)], Textarea, "Enter your message")}
            <div>
                <button>Send</button>
            </div>
        </form>         
    );
});

const DialogsReduxForm = reduxForm<NewDialogsFormType, PropsType>({
    form: "dialogsForm",
})(DialogsForm);

export default DialogsReduxForm;

type PropsType = {

};
type KeysDialogsType = GetStringKeys<NewDialogsFormType>;
