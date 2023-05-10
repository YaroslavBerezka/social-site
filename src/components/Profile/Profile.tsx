import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import { ProfileType } from "../../types/types";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { DispatchType } from "../../redux/redux-store";
import { useDispatch, useSelector } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getProfile, getUserStatus } from "../../redux/selectors/profile-selectors";
import { savePhoto, saveProfile, updateStatus } from "../../api/thunkMW/thunk-profile";

const Profile: React.FC<PropsType> = withAuthRedirect(React.memo((props) => {
    const { isOwner }  = props;
    const profile = useSelector(getProfile);
    const status = useSelector(getUserStatus);
    const dispatch: DispatchType = useDispatch();

    const profileUpdateStatus = (status: string) => {
        dispatch(updateStatus(status));
    };
    const profileSavePhoto = (file: File) => {
        dispatch(savePhoto(file));
    };
    const profileSaveProfile = (profile: ProfileType) => {
        return dispatch(saveProfile(profile));
    };

    return (
        <div className={style.profile}>
            <ProfileInfo profile={profile}
                         isOwner={isOwner} 
                         status={status}
                         savePhoto={profileSavePhoto}
                         updateStatus={profileUpdateStatus}
                         saveProfile={profileSaveProfile} />
            <MyPosts  />
        </div>
    );   
}));

export default Profile;

type PropsType = { 
    isOwner?: boolean 
};
