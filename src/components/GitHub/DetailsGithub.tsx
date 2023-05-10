import axios from "axios";
import style from "./Github.module.css";
import React, {useState, useEffect} from "react";
import { UserType, UsersDetails } from "./GIthub";

export const DetailsGithub: React.FC<PropsType> = React.memo((props) => {
    const {selectedUser} = props;
    const [time, setTime] = useState<number>(10);
    const [usersDetails, setUsersDetails] = useState<UsersDetails | null>(null);
    let interval: any;

    useEffect(() => {
        interval = setInterval(() => {
                console.log('run interval');
                //@ts-ignore
                setTime((time: number) => {
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
                .get<UsersDetails>(`https://api.github.com/users/${selectedUser.login}`)
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
                                        <img src={usersDetails?.avatar_url} />
                                        <div>
                                            <div className={style.followers}>
                                                {"followers : " + usersDetails?.followers}
                                            </div>
                                        </div>     
                                     </div>}
            </>);
});

type PropsType = {
    selectedUser: UserType | null
};