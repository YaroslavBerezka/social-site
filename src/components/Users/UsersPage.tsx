import React from "react"
import { Users } from "./Users"

export const UsersPage: React.FC<IProps> = React.memo((props) => {
    return <Users />
});

interface IProps {

};
