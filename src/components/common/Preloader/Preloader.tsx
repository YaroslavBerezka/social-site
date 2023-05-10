import React from "react";
import style from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.svg";

const Preloader: React.FC<PropsType> = React.memo((props) => {
    return (
        <div className={style.preloader}>
            <img src={preloader}  />
        </div>
    );
});

export default Preloader;

type PropsType = {

};