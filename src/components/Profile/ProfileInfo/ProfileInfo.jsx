import React from 'react';
import classes from './ProfileInfo.module.css';
import Loader from '../../Loader/Loader';
import ProfileStatusWithHooks from './Status/ProfileStatusWIthHooks';
const ProfileInfo = (props) => {

    if (!props.userProfile){
        return <Loader/>
    }
    return (
        <div className={classes.profileinfo}>
            <div>
                <img src={props.userProfile.photos.large} />
            </div>
      <div className={classes.profileDescription}>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
        </div>
    )
}

export default ProfileInfo;