import React, { useEffect, useState } from "react"
import { DetailsGithub } from "./DetailsGithub"
import style from "./Github.module.scss"
import { InputGithub } from "./InputGithub"
import { UsersGithub } from "./UsersGithub"

const GIthub: React.FC<IProps> = React.memo(() => {
    const [currentTerm, setCurrentTerm] = useState<null | string>('a');
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

    const onSubmit = (value: string) => {
        setCurrentTerm(value);
    };
    const onSelected = (user: IUser) => {
        setSelectedUser(user);
    };

    useEffect(() => {
        if(!!selectedUser) {
            document.title = selectedUser.login;
        }
        return () => {
            document.title = 'Social Site';
        }
    },[selectedUser]);


    return (
        <div className={style.header}>
            <div>
                <InputGithub currentTerm={currentTerm}
                             onSubmit={onSubmit} />
                <button onClick={() => setCurrentTerm('a')}>reset</button>
                <UsersGithub selectedUser={selectedUser}
                             currentTerm={currentTerm}
                             onSelected={onSelected} />
                
            </div>
            {!!selectedUser && <DetailsGithub selectedUser={selectedUser} />}  
        </div>
    );
});

export default GIthub;

interface IProps {

};
export interface IUser {
    login: string
    id: number
};
export interface IUsers {
    items: IUser[]
};
export interface IUsersDetails {
    login: string
    avatar_url: string
    followers: number
};
