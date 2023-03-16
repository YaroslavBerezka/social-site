import PropTypes from 'prop-types';
import s from "./Dialogs.module.css";
import { reduxForm } from "redux-form";
import { Element, renderField } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Textarea = Element("textarea")

const DialogsForm = (props) => {
    const {handleSubmit} = props;
    
    return (
        <form onSubmit={handleSubmit}>
            {renderField("newMessageBody", [required, maxLengthCreator(50)], Textarea, "Enter your message")}
            <div>
                <button>Send</button>
                {/* <button>Remove</button> */}
            </div>
        </form>
                
    );
}

DialogsForm.propType = {
    handleSubmit: PropTypes.func,
}

const DialogsReduxForm = reduxForm({
    form: "dialogsForm",
})(DialogsForm);

export default DialogsReduxForm;