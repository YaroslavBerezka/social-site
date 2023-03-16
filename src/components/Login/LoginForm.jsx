import { reduxForm } from "redux-form";
import style from "./LoginForm.module.css";
import { Element } from "../common/FormsControls/FormsControls";
import { renderField } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";


const Input = Element("input");

const LoginForm = (props) => {
    const {handleSubmit, error} = props;

    return(
            <form onSubmit={handleSubmit}>
                {renderField( "email", [required, maxLengthCreator(20)], Input, null, null, "Email" )}
                {renderField( "password", [required, maxLengthCreator(20)], Input, "password", null, "Password" )}
                {renderField( "rememberMe", [] , Input, "checkbox", "remember me" )}
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
}

const LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm);

export default LoginReduxForm;