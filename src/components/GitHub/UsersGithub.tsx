import axios from "axios";
import style from "./Github.module.css";
import { UserType, UsersType } from "./GIthub";
import React, {useEffect, useState} from "react";

export const UsersGithub: React.FC<PropsType> = React.memo((props) => {
    const {selectedUser, onSelected, currentTerm} = props;
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        axios
            .get<UsersType>(`https://api.github.com/search/users?q=${currentTerm}`)
            .then(response => setUsers(response.data.items))
    },[currentTerm]);

    return (
        <ul>
            {users.map((u: any) => <li key={u.id}
                                       className={selectedUser === u ? style.selected : ''}
                                       onClick={() => onSelected(u)}>
                                    {u.login}
                                   </li>)}
        </ul>
    );
});

type PropsType = {
    selectedUser: UserType | null
    onSelected: (user: UserType) => void
    currentTerm: string | null
};