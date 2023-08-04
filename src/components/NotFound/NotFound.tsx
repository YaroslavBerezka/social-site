import React from "react"
import style from "./NotFound.module.scss"


export const NotFound: React.FC<IProps> = React.memo((props) => {
   return (
        <div className={style.notFound}><b>404 NOT FOUND</b></div>
        
   );
});

interface IProps {

};
