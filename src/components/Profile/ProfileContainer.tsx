import React from "react";
import Profile from "./Profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType } from "../../redux/redux-store";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUserProfile, getStatus } from "../../api/thunkMW/thunk-profile";
import { getAutorizedUserId } from "../../redux/selectors/profile-selectors";

const ProfileContainer: React.FC = React.memo(() => {
    const autorizedUserId = useSelector(getAutorizedUserId);
    const dispatch: DispatchType = useDispatch();
    const router = {
        location: useLocation(),
        navigate: useNavigate(),
        params: useParams(),
    };
    const userId = router.params.userId || autorizedUserId;
    const isOwner = !router.params.userId;
    
    useEffect(() => {
        dispatch(getUserProfile(userId as number));
        dispatch(getStatus(userId as number));
    }, [userId]);
    
    return (
        <Profile isOwner={isOwner}/>
    );
});

export default ProfileContainer;



