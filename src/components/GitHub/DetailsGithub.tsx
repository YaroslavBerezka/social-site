import axios from "axios"
import React, { useEffect, useState } from "react"
import { IUser, IUsersDetails } from "./GIthub"
import style from "./Github.module.scss"

export const DetailsGithub: React.FC<IType> = React.memo((props) => {
    const {selectedUser} = props;
    const [time, setTime] = useState<number>(10);
    const [usersDetails, setUsersDetails] = useState<IUsersDetails | null>(null);
    let interval: any;

    useEffect(() => {
        interval = setInterval(() => {
                console.log('run interval');
                // @ts-ignore
                setTime((time: number)  => {
                    if(time < 1) {
                        return clearInterval(interval);
                    }
                    return time - 1;
                });
        }, 1000); 
        
        return () => {
            clearInterval(interval);
        }
    },[usersDetails]);

    useEffect(() => {
        if(!!selectedUser) {
            axios
                .get<IUsersDetails>(`https://api.github.com/users/${selectedUser.login}`)
                .then(response => { 
                    setTime(10);
                    setUsersDetails(response.data);
                }) 
            }
    },[selectedUser]);

    return (<>
        {selectedUser && time > 0 && <div className={style.details}>
                                        <div>{time}</div>
                                        <h1>{usersDetails?.login}</h1>
                                        <img src={usersDetails?.avatar_url} alt=''/>
                                        <div>
                                            <div className={style.followers}>
                                                {"followers : " + usersDetails?.followers}
                                            </div>
                                        </div>     
                                     </div>}
            </>);
});

interface IType {
    selectedUser: IUser | null
};