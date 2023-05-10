import React from "react";
import cn from "classnames";
import {NavLink} from "react-router-dom";
import style from "./DialogItem.module.css";

const DialogItem: React.FC<PropsType> = React.memo((props) => {
    const {id, name} = props;
    const path = "/dialogs/" + id;

    return (
            <div className={cn (style.dialog, style.active)}>
                <NavLink to={path} className={navData => navData.isActive ? style.active 
                                                                          : style.dialog}>{name}</NavLink> 
            </div>           
    );
});

export default DialogItem;

type PropsType = {
    id: number
    name: string
};