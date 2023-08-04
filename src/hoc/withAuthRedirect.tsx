import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getIsAuth } from "../redux/selectors/header-selectors"

export const withAuthRedirect = (Component: React.ComponentType<IProps>) => {
    const RedirectComponent: React.FC<IProps> = (props) => {
            const {...restProps} = props;
            const isAuth = useSelector(getIsAuth);
            if(!isAuth) return <Navigate to={'/login'} />

            return <Component {...restProps as IProps} />
    };
    return RedirectComponent;
};

interface IProps {
    isOwner?: boolean
};