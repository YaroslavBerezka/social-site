import React from "react"
import { InjectedFormProps, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../utils/validators/validators"
import { Element, GetStringKeys, renderField } from "../common/FormsControls/FormsControls"
import { INewDialogsForm } from "./Dialogs"

const Textarea = Element("textarea");

const DialogsForm: React.FC<InjectedFormProps<INewDialogsForm, IProps> & IProps> = React.memo((props) => {
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

const DialogsReduxForm = reduxForm<INewDialogsForm, IProps>({
    form: "dialogsForm",
})(DialogsForm);

export default DialogsReduxForm;

interface IProps {

};
type KeysDialogsType = GetStringKeys<INewDialogsForm>;
