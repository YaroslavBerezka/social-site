import { compose } from "redux";
import { connect } from "react-redux";
import LoginReduxForm from "./LoginForm";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/reducers/auth-reducer";
import { getIsAuth } from "../../redux/selectors/header-selectors";


const Login = (props) => {
    const {isAuth, login} = props;

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);   
    };

    if(isAuth) return <Navigate to={'/profile'} />

    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
});

export default compose(
    connect(mapStateToProps, {login}),
)(Login);