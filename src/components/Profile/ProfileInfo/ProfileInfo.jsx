import React from 'react';
import classes from './ProfileInfo.module.css';
import Loader from '../../Loader/Loader';
const ProfileInfo = (props) => {

    if (!props.userProfile){
        return <Loader/>
    }
    return (
        <div className={classes.profileinfo}>
            
        <div>
            <div>
            <img src={props.userProfile.photos.large} />
            </div>
            <img className = {classes.avatar} src='https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg' />
        </div>

        <div className={classes.profileDescription}>
            Hello. My name is Polly
        </div>
        </div>
    )
}

export default ProfileInfo;