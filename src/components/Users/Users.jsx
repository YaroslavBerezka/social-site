import React from "react";
import User from "./User";
import PropTypes from "prop-types";
import styles from "../Users/Users.module.css";
import Paginator from "../common/Paginator/Paginator";




const Users = (props) => {
    const {totalItemsCount, pageSize, currentPage, onPageChanged,
           users, followingInProgress, unfollow, follow} = props;

    return (
            <div className={styles.users}>
                <Paginator onPageChanged={onPageChanged} pageSize={pageSize}
                           totalItemsCount={totalItemsCount} currentPage={currentPage} />
                <div>
                    { users.map(user => { 
                    const isFollowingInProgress = followingInProgress.some(id => id === user.id);

                    return <User isFollowingInProgress={isFollowingInProgress} unfollow={unfollow}
                                           follow={follow}  user={user} key={user.id} />
                    })};
                </div>
            </div>
    );
};

Users.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    totalItemsCount: PropTypes.number.isRequired,
    isAuth: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    followingInProgress: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    follow: PropTypes.func.isRequired,
    requestUsers: PropTypes.func.isRequired,
    toggleFollowingProgress: PropTypes.func.isRequired,
    unfollow: PropTypes.func.isRequired,
    followSuccess: PropTypes.func.isRequired,
    unfollowSuccess: PropTypes.func.isRequired,
};

export default Users;