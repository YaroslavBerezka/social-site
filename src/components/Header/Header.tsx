import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { DispatchType } from "../../redux/redux-store";
import { useDispatch, useSelector } from "react-redux";
import { getLogout } from "../../api/thunkMW/thunk-auth";
import { getIsAuth, getLogin } from "../../redux/selectors/header-selectors";

const Header: React.FC = React.memo(() => {
  const login = useSelector(getLogin);
  const isAuth = useSelector(getIsAuth);
  const dispatch: DispatchType = useDispatch();

  const logout = () => {
    return dispatch(getLogout());
  };

  return (
    <header className={style.header}>
      <NavLink to="/profile" ><img src ="https://www.rippletraining.com/wp-content/uploads/2018/03/davinci-logo-300x300.png"/></NavLink>

      <div className={style.loginBlock}>
          {isAuth 
          ?  <div >{login} - <button onClick={logout}>Log out</button></div>
          : <NavLink to={"/login"}  className={navData => navData.isActive ? style.active 
                                                                           : style.item}>Login</NavLink>}
      </div>
    </header>
  );
});

export default Header;
