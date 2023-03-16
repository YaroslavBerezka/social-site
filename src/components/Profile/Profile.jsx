import PropTypes from "prop-types";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    const {profile, status, updateStatus} = props;

    return (
        <div>
            <ProfileInfo profile={profile} 
                         status={status}
                         updateStatus={updateStatus} />
            <MyPostsContainer  />
        </div>
    );
   
}

Profile.propTypes = {
    getStatus: PropTypes.func.isRequired,
    getUserProfile: PropTypes.func.isRequired,
    profile: PropTypes.object,
    status: PropTypes.string,
    updateStatus: PropTypes.func.isRequired,
}
export default Profile;
