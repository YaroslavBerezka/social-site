import React from "react";
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/selectors/header-selectors";

export const withAuthRedirect = (Component: React.ComponentType<PropsType>) => {
    const RedirectComponent: React.FC<PropsType> = (props) => {
            const {...restProps} = props;
            const isAuth = useSelector(getIsAuth);
            if(!isAuth) return <Navigate to={'/login'} />

            return <Component {...restProps as PropsType} />
    };
    return RedirectComponent;
};

type PropsType = {
    isOwner?: boolean
};