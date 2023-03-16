import React from "react";
import Profile from "./Profile";
import { compose } from "redux";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "../../hoc/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getIsAuth } from "../../redux/selectors/header-selectors";
import { getUserProfile, getStatus, updateStatus } from "../../redux/reducers/profile-reducer";
import { getAutorizedUserId, getProfile, getUserStatus } from "../../redux/selectors/profile-selectors";
import { useEffect } from "react";

const ProfileContainer = (props) => {
    const { getUserProfile, getStatus, profile, status, updateStatus,
            router, autorizedUserId} = props;
    const userId = router.params.userId || autorizedUserId;

    useEffect(() => {
        console.log("profile")
        getUserProfile(userId);
    }, []);

    useEffect(() => {
        console.log("status")
        getStatus(userId);
    }, []);
    
    return (
        <Profile profile={profile}
                 status={status}
                 updateStatus={updateStatus}
                 getStatus={getStatus}
                 getUserProfile={getUserProfile}/>
    );
    
    
   
};

ProfileContainer.propTypes = {
    getStatus: PropTypes.func.isRequired,
    getUserProfile: PropTypes.func.isRequired,
    profile: PropTypes.object,
    router: PropTypes.object.isRequired,
    status: PropTypes.string,
    updateStatus: PropTypes.func.isRequired,
    autorizedUserId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({ profile: getProfile(state),
                                      status: getUserStatus(state),
                                      autorizedUserId: getAutorizedUserId(state),
                                      isAuth: getIsAuth(state), });


export default compose (
    connect (mapStateToProps, 
            {getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);