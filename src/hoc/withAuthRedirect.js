import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const mapStateToPropsRedirect = (state) => ({ isAuth: state.auth.isAuth });

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
            const {isAuth} = props;

            if(!isAuth) return <Navigate to={'/login'} />

            return <Component {...props} />
        
    };
    return compose(connect(mapStateToPropsRedirect))(RedirectComponent);
};