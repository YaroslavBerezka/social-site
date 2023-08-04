import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getStatus, getUserProfile } from "../../api/thunkMW/thunk-profile"
import { DispatchType } from "../../redux/redux-store"
import { getAutorizedUserId } from "../../redux/selectors/profile-selectors"
import Profile from "./Profile"

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



