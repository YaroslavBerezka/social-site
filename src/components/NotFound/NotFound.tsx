import React from "react";
import style from "./NotFound.module.css";


export const NotFound: React.FC<PropsType> = React.memo((props) => {
   return (
        <div className={style.notFound}><b>404 NOT FOUND</b></div>
        
   );
});

type PropsType = {

};
