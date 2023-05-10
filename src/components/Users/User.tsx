import React from "react";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { UserType } from "../../types/types";
import userPhoto from "../../assets/images/user.png";

const User: React.FC<PropsType> = React.memo((props) => {
    const {user, isFollowingInProgress, unfollow, follow} = props;

    return (
           <div className={style.user}> 
                <span>
                    <div className={style.photoUsers}>
                        <NavLink to={"/profile/" + user.id}>
                            <img src={(user.photos.small ? user.photos.small  
                                                         : userPhoto )}
                                      className={style.userPhoto} /> 
                        </NavLink>
                    </div>
                    <span>
                        <span className={style.infoUsers}>
                            <div><b>{user.name}</b></div>
                            <div>{user.status ? user.status
                                              : "status empty"}</div>
                        </span>
                    </span>
                    <div className={style.followingUsers}>
                        {user.followed 
                                ? <button disabled={isFollowingInProgress} 
                                          onClick={() => { unfollow(user.id) }}>Unfollow</button> 
                                : <button disabled={isFollowingInProgress} 
                                          onClick={() => { follow(user.id) }}>Follow</button> }
                    </div>
                </span>   
            </div>   
        );
});

export default User;

type PropsType = {
    user: UserType
    isFollowingInProgress: boolean
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}; 