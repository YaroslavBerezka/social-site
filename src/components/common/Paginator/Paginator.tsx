import cn from "classnames";
import style from "./Paginator.module.css";
import React, { useEffect, useState } from "react";

const Paginator: React.FC<PropsType> = React.memo((props) => {
    const {totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10} = props;
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages: Array<number> = [];
    for(let i = 1; i <= pagesCount; i++) {
            pages.push(i); 
    };

    useEffect(() => setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]);
        
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (<div className={style.paginator}>
                {portionNumber > 1 && 
                 <button className={style.buttons} onClick={() => setPortionNumber(portionNumber - 1)}>❮</button>}

                {pages.filter((p: number) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                      .map((p: number) => {
                        return <span className={cn ({[style.selectedPage]: currentPage === p}, style.pageNumber)}
                                     key={p} 
                                     onClick={() => onPageChanged(p)}>{p}</span>
                      })}
                { portionCount > portionNumber && 
                  <button className={style.buttons} onClick={() => setPortionNumber(portionNumber + 1)}>❯</button>}
            </div>
    );
});

export default Paginator;

type PropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  portionSize?: number 
};