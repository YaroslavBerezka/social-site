import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    const {id, name} = props;

    const path = "/dialogs/" + id;

    return (
            <div className={s.dialog + " " + s.active}>
                <NavLink to={path} className={navData => navData.isActive ? s.active : s.dialog}>{name}</NavLink> 
            </div>           
    );
 
};

export default DialogItem;