import React, { ChangeEvent, useEffect, useState } from "react"
import style from "./ProfileInfo.module.scss"

const  ProfileStatusWithHooks: React.FC<IProps> = React.memo((props) =>  {
    const {status, isOwner, updateStatus} = props;
    const [editMode, setEditMod] = useState<boolean>(false);
    const [newStatus, setStatus] = useState<string>(status);

    useEffect(() => {
           setStatus(status);
    }, [status]);

    const activateEditMode = () => {
        isOwner && setEditMod(true);
    };
    const deactivateEditMode = () => {
        setEditMod(false);
        updateStatus(newStatus);
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
       setStatus(e.currentTarget.value);
        
    };
    
    return (
            <div>
                {!editMode &&
                    <div className={style.status}>
                       <b>Status: </b><span onDoubleClick={activateEditMode}>{!status ? "--------"
                                                                                      : status}
                                      </span>
                    </div> }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} 
                               autoFocus={true} 
                               onBlur={deactivateEditMode} 
                               value={newStatus} />
                    </div> }
            </div>
        ); 
});

export default ProfileStatusWithHooks;

interface IProps {
    status: string
    isOwner?: boolean
    updateStatus: (status: string) => void
};