import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { login } from "../../api/thunkMW/thunk-auth"
import { DispatchType } from "../../redux/redux-store"
import { getCaptchaUrl, getIsAuth } from "../../redux/selectors/header-selectors"
import LoginReduxForm, { ILoginFormValues } from "./LoginForm"
import style from "./LoginForm.module.scss"

const Login: React.FC = React.memo(() => {
    const isAuth = useSelector(getIsAuth);
    const captchaUrl = useSelector(getCaptchaUrl);
    const dispatch: DispatchType = useDispatch();

    const onSubmit = (formData: ILoginFormValues) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));   
    };

    if(isAuth) return <Navigate to={'/profile'} />

    return(
        <div className={style.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}
                            captchaUrl={captchaUrl} />
        </div>
    );
});

export default Login;