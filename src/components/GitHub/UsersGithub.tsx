import axios from "axios"
import React, { useEffect, useState } from "react"
import { IUser, IUsers } from "./GIthub"
import style from "./Github.module.scss"

export const UsersGithub: React.FC<IProps> = React.memo((props) => {
    const {selectedUser, onSelected, currentTerm} = props;
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        axios
            .get<IUsers>(`https://api.github.com/search/users?q=${currentTerm}`)
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

interface IProps {
    selectedUser: IUser | null
    onSelected: (user: IUser) => void
    currentTerm: string | null
};