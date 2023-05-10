import React from "react";
import style from "./News.module.css";

const News: React.FC<PropsType> = React.memo((props) => {
    return (
        <div className={style.content}>
            News
        </div>
    );
});

export default News;

type PropsType= {

};