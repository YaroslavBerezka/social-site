import cn from "classnames"
import React from "react"
import { NavLink } from "react-router-dom"
import style from "./DialogItem.module.scss"

const DialogItem: React.FC<IProps> = React.memo((props) => {
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

interface IProps {
    id: number
    name: string
};