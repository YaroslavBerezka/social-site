import React from "react"
import style from "../ProfileInfo/ProfileInfo.module.scss"

export const Contact: React.FC<IProps> = React.memo((props) => {
    const {contactTitle, contactValue} = props;

    return (
        <div className={style.allContact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
        );
});

interface IProps {
    contactTitle: string
    contactValue:string
};
