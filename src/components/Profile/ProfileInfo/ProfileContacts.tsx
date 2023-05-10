import React from  "react";
import style from "../ProfileInfo/ProfileInfo.module.css";

export const Contact: React.FC<PropsType> = React.memo((props) => {
    const {contactTitle, contactValue} = props;

    return (
        <div className={style.allContact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
        );
});

type PropsType = {
    contactTitle: string
    contactValue:string
};
