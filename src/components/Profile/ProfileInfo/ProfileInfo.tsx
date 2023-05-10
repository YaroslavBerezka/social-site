import { useState } from "react";
import ProfileData from "./ProfileData";
import React, { ChangeEvent } from "react";
import style from "./ProfileInfo.module.css";
import ProfileDataForm from "./ProfileDataForm";
import { ProfileType } from "../../../types/types";
import userPhoto from "../../../assets/images/user.png";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo: React.FC<PropsType> = React.memo((props) => {
    const {profile, status, updateStatus, isOwner, savePhoto, saveProfile} = props;
    const [editMode, setEditMod] = useState(false);

    if(!profile) {
        return <Preloader/>
    };

    const activateEditMode = () => {
        isOwner && setEditMod(true);
    };
    const onSubmit = (formData: ProfileType) => {
        //@ts-ignore
        saveProfile(formData).then(() => {
                        setEditMod(false);
                    });
    };
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div>
            <div>
                <div className={style.descriptionBlock}>
                    <div className={style.currentProfile}> 
                    <img className={style.mainPhoto} src={profile.photos.large != null ? profile.photos.large 
                                                                                       : userPhoto}  />
                    {isOwner ? <input onChange={onMainPhotoSelected}
                                      type={"file"} 
                                      name={"file"}  />
                             : isOwner}
                </div>
                    <ProfileStatusWithHooks updateStatus={updateStatus}
                                            isOwner={isOwner} 
                                            status={status} />
                    {editMode  ? <ProfileDataForm initialValues={profile}
                                                  onSubmit={onSubmit}
                                                  profile={profile} /> 
                               : <ProfileData activateEditMode={activateEditMode}
                                              profile={profile} />}
                    
                </div> 
            </div> 
        </div> 
    );
});

export default ProfileInfo;

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner?: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
};