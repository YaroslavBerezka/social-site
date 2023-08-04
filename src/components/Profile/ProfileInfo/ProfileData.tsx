import React from "react"
import { ContactsKeysType, IProfile } from "../../../interfaces/interfaces"
import Preloader from "../../common/Preloader/Preloader"
import { Contact } from "./ProfileContacts"
import style from "./ProfileInfo.module.scss"

const ProfileData: React.FC<IProps> = React.memo((props) => {
    const {profile, activateEditMode} = props;

    if(!profile) {
        return <Preloader/>
    };

    return (
            <div className={style.contacts} onDoubleClick={activateEditMode}>
                <div>
                    <b>Full name:</b> {profile.fullName}
                </div>
                <div>
                    <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" 
                                                                      : "no"}
                </div>
                {profile.lookingForAJob && <div>
                                                <b>My professional skills:</b> {profile.lookingForAJobDescription}
                                           </div>}
                <div>
                    <b>About me:</b> {profile.aboutMe}
                </div>
                <div>
                    <b>Contacts:</b> {Object.keys(profile.contacts).map((key) => {
                        return <Contact contactTitle={key} 
                                        contactValue={profile.contacts[key as ContactsKeysType]}
                                        key={key}  />
                    })} 
                </div>
            </div>       
    );
});

export default ProfileData;

interface IProps {
    profile: IProfile
    activateEditMode: () => void
};
