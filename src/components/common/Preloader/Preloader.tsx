import React from "react"
import preloader from "../../../assets/images/preloader.svg"
import style from "./Preloader.module.scss"

const Preloader: React.FC<IProps> = React.memo((props) => {
    return (
        <div className={style.preloader}>
            <img src={preloader}  alt=''/>
        </div>
    );
});

export default Preloader;

interface IProps {

};