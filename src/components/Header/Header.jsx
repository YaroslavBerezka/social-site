import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const {login,  logout, isAuth} = props;

  return (
    <header className={style.header}>
        <img src ="https://www.rippletraining.com/wp-content/uploads/2018/03/davinci-logo-300x300.png"/>

        <div className={style.loginBlock}>
          {isAuth 
          ?  <div>{login} - <button onClick={logout}>Log out</button></div>
          : <NavLink to={"/login"}  className={navData => navData.isActive ? style.active : style.item}>Login</NavLink>}
        </div>
    </header>
  );
}

export default Header;