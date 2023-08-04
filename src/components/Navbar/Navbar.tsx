import React from "react"
import { NavLink } from "react-router-dom"
import style from "./Navbar.module.scss"

const Navbar: React.FC = React.memo(() => {
  const NavPosition = (navData: any) =>  navData.isActive ? style.active : style.item;

  return (
      <nav className={style.nav}>
        <div className={style.item}>
          <NavLink to="/profile" className={NavPosition}>Profile</NavLink> 
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs"  className={NavPosition}>Messages</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/chat"  className={NavPosition}>Chat</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/github"  className={NavPosition}>GitHub</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/users"  className={NavPosition}>Users</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/news"  className={NavPosition}>News</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/music"  className={NavPosition}>Music</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/settings"  className={NavPosition}>Settings</NavLink>
        </div>
      </nav>
  );
});

export default Navbar;