import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { savePhoto, saveProfile, updateStatus } from "../../api/thunkMW/thunk-profile"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { IProfile } from "../../interfaces/interfaces"
import { DispatchType } from "../../redux/redux-store"
import { getProfile, getUserStatus } from "../../redux/selectors/profile-selectors"
import MyPosts from "./MyPosts/MyPosts"
import style from "./Profile.module.scss"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile: React.FC<IProps> = withAuthRedirect(React.memo((props) => {
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
    const profileSaveProfile = (profile: IProfile) => {
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

interface IProps { 
    isOwner?: boolean 
};
