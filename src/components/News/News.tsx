import React from "react"
import style from "./News.module.scss"

const News: React.FC<IProps> = React.memo((props) => {
    return (
        <div className={style.content}>
            News
        </div>
    );
});

export default News;

interface IProps {

};