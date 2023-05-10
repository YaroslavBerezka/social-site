import React from "react";
import style from "./ProfileInfo.module.css";
import { ProfileType } from "../../../types/types";
import { InjectedFormProps, reduxForm } from "redux-form";
import { Element, renderField } from "../../common/FormsControls/FormsControls";

const Input = Element("input");
const Textarea = Element("textarea");

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = React.memo((props) => {
    const {handleSubmit, error, profile} = props;
    
    return (
        <form className={style.contacts} onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {error && <div className={style.formSummaryError}>
                                    {error}
                    </div>}
            <div>
                <b>Full name:</b> {renderField<ProfileFormKeysType>("fullName", [], Input, null, null, "Full name" )}
            </div>
            <div>
                <b>Looking for a job:</b> {renderField<ProfileFormKeysType>("lookingForAJob", [], Input, "checkbox", null, null )}
                                                                
            </div>
            <div>
                <b>My professional skills:</b> {renderField<ProfileFormKeysType>("lookingForAJobDescription", [],
                                                            Textarea, null, null, "My professional skills" )}
            </div>
            <div>
                <b>About me:</b> {renderField<ProfileFormKeysType>("aboutMe", [], Textarea, null, null, "About me" )}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return <div className={style.contact} key={key}>
                                <b>{key}: {renderField("contacts." + key.toLocaleLowerCase(), [], Input, null, null, key )}</b>
                            </div>
                        })}
            </div>
        </form>      
    );
});

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({
    form: "edit-profile",
    enableReinitialize: true, 
    destroyOnUnmount: false })(ProfileDataForm);

export default ProfileDataReduxForm;

type PropsType = {
    profile: ProfileType
};
type ProfileFormKeysType = Extract<keyof ProfileType, string>;