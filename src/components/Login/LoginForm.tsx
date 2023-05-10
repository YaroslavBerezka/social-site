import React from "react";
import style from "./LoginForm.module.css";
import { InjectedFormProps, reduxForm } from "redux-form";
import { Element } from "../common/FormsControls/FormsControls";
import { renderField } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Input = Element("input");

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, PropsType> & PropsType> = React.memo((props) => {
    const {handleSubmit, error, captchaUrl} = props;
    
    return(
            <form onSubmit={handleSubmit} className={style.form}>
                {renderField<LoginFormTypeKeys>( "email", [required, maxLengthCreator(40)], 
                                                           Input, null, null, "Email" )}
                {renderField<LoginFormTypeKeys>( "password", [required, maxLengthCreator(40)], 
                                                              Input, "password", null, "Password" )}
                {renderField<LoginFormTypeKeys>( "rememberMe", [] , 
                                                 Input, "checkbox", "remember me" )}

                {captchaUrl && <img className={style.captchaUrl} src={captchaUrl} />}
                {captchaUrl && renderField( "captcha", [required] , Input, null, null, "Symbols of image" )}
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                                               
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
});

const LoginReduxForm = reduxForm<LoginFormValuesType, PropsType>({
    form: "login",
})(LoginForm);

export default LoginReduxForm;

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
};
type LoginFormTypeKeys = Extract<keyof LoginFormValuesType, string>;
type PropsType = {
    captchaUrl: string | null
};