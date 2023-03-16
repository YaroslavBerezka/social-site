import React from "react";
import Users from "./Users";
import { compose } from "redux";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { followSuccess, requestUsers, unfollowSuccess,
         toggleFollowingProgress, follow,
         unfollow,  } from "../../redux/reducers/users-reducer";
import { getCurrentPage, getFollowingInProgress,
         getIsFetching, getPageSize, getTotalItemsCount, getUsers, } from "../../redux/selectors/users-selectors";







const UsersContainer = (props) => {
    const {currentPage, requestUsers, pageSize, isFetching} = props;

    useEffect(() => {
        requestUsers(currentPage, pageSize);
 }, []);


    const onPageChanged = (pageNumber) => {
        requestUsers(pageNumber, pageSize);
    };
    

    
        

        return <>
        {isFetching ? <Preloader /> : <Users  {...props}
                                               onPageChanged={onPageChanged} />}
                   
            </>
     
                 
};

UsersContainer.propTypes = {
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

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
    
};


export default compose(
    connect(mapStateToProps, 
        {followSuccess, unfollowSuccess,
         toggleFollowingProgress,
         requestUsers, follow, unfollow }),
         withAuthRedirect
)(UsersContainer);