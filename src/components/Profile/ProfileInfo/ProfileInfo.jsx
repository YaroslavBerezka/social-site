import PropTypes from "prop-types";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    const {profile, status, updateStatus} = props;

    if(!profile) {
        return <Preloader/>
    };

    return (
        <div>
         <div>
            <div className={s.descriptionBlock}>
             <div> 
             <img src={profile.photos.large != null ? profile.photos.large : userPhoto} />
             <ProfileStatusWithHooks status={status} 
                                     updateStatus={updateStatus} />
            </div> 
         </div>
            <div className={s.contacts}>
               <span>About me: {profile.aboutMe}</span>
               <span>Full name: {profile.fullName}</span>
               <span>Job description: {profile.lookingForAJobDescription}</span>
            </div>
            </div>
        </div>
    );
};

ProfileInfo.propTypes = {
    profile: PropTypes.object,
    status: PropTypes.string,
    updateStatus: PropTypes.func.isRequired,
};

export default ProfileInfo;