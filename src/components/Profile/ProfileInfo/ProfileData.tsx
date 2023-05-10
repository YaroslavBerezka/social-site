import React from "react";
import { Contact } from "./ProfileContacts";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import { ContactsKeysType, ProfileType } from "../../../types/types";

const ProfileData: React.FC<PropsType> = React.memo((props) => {
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

type PropsType = {
    profile: ProfileType
    activateEditMode: () => void
};
