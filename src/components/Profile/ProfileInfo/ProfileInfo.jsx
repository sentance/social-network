import React from 'react';
import classes from './ProfileInfo.module.css';
import Loader from '../../Loader/Loader';
import ProfileStatusWithHooks from './Status/ProfileStatusWIthHooks';
import avadafault from '../../../defaultava.jpg';

const ProfileInfo = ({userProfile, status, updateStatus}) => {

    if (!userProfile){
        return <Loader/>
    }
    return (
        <div className={classes.profileinfo}>
            <div>
                <img alt='Avatar' src={userProfile.photos.small != null ? userProfile.photos.small : avadafault}/>
            </div>
      <div className={classes.profileDescription}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
        </div>
    )
}

export default ProfileInfo;