import React from "react"
import { InjectedFormProps, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../utils/validators/validators"
import { Element, renderField } from "../common/FormsControls/FormsControls"
import style from "./LoginForm.module.scss"

const Input = Element("input");

const LoginForm: React.FC<InjectedFormProps<ILoginFormValues, IProps> & IProps> = React.memo((props) => {
    const {handleSubmit, error, captchaUrl} = props;
    
    return(
            <form onSubmit={handleSubmit} className={style.form}>
                {renderField<LoginFormTypeKeys>( "email", [required, maxLengthCreator(40)], 
                                                           Input, null, null, "Email" )}
                {renderField<LoginFormTypeKeys>( "password", [required, maxLengthCreator(40)], 
                                                              Input, "password", null, "Password" )}
                {renderField<LoginFormTypeKeys>( "rememberMe", [] , 
                                                 Input, "checkbox", "remember me" )}

                {captchaUrl && <img className={style.captchaUrl} src={captchaUrl} alt=''/>}
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

const LoginReduxForm = reduxForm<ILoginFormValues, IProps>({
    form: "login",
})(LoginForm);

export default LoginReduxForm;

export interface ILoginFormValues {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
};
type LoginFormTypeKeys = Extract<keyof ILoginFormValues, string>;
type IProps = {
    captchaUrl: string | null
};