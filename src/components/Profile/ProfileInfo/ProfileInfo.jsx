import React from 'react';
import classes from './ProfileInfo.module.css';
import Loader from '../../Loader/Loader';
import ProfileStatus from './Status/ProfileStatus';
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
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
        </div>
    )
}

export default ProfileInfo;