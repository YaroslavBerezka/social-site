import style from "./Github.module.css";
import { InputGithub } from "./InputGithub";
import { UsersGithub } from "./UsersGithub";
import { DetailsGithub } from "./DetailsGithub";
import React, {useState, useEffect} from "react";

const GIthub: React.FC = React.memo(() => {
    const [currentTerm, setCurrentTerm] = useState<null | string>('a');
    const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

    const onSubmit = (value: string) => {
        setCurrentTerm(value);
    };
    const onSelected = (user: UserType) => {
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

type PropsType = {

};
export type UserType ={
    login: string
    id: number
};
export type UsersType = {
    items: UserType[]
};
export type UsersDetails = {
    login: string
    avatar_url: string
    followers: number
};
