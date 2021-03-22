import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Loader from '../../Loader/Loader';
import ProfileStatusWithHooks from './Status/ProfileStatusWIthHooks';
import avadafault from '../../../defaultava.jpg';
import ProfileFormRedux from '../ProfileDataForm/ProfileDataForm';

const ProfileInfo = ({userProfile, status, updateStatus, isOwner, savePhoto, updateProfile}) => {
    
    let [editMode, setEditMode] = useState(false) 

    if (!userProfile){
        return <Loader/>
    }
    const onMainPhotoSelected = (e) =>{
        if(e.target.files.length !== 0){
            savePhoto(e.target.files[0])
        }
    }

    const onFormSubmit = (formData) =>{
        updateProfile(formData)
        setEditMode(false)
    }
    return (
        <div className={classes.profileinfo}>
            <div>
                <img alt='Avatar' src={userProfile.photos.small !== null ? userProfile.photos.small : avadafault}/>
            </div>
            {editMode 
            ? <ProfileFormRedux initialValues={userProfile} userProfile={userProfile} onSubmit={onFormSubmit}/> 
            : <ProfileData 
                userProfile={userProfile}
                isOwner={isOwner}
                goToEditMode={()=>{
                    setEditMode(true)
                }}
                />}
 
      <div className={classes.profileDescription}>
         
          {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>} 
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
        </div>
    )
}

const ProfileData = ({userProfile, isOwner, goToEditMode})=>{
    return (
        <div>
            {isOwner &&  <button onClick={goToEditMode}>Edit</button>}
        <div><b>Name: </b>{userProfile.fullName}</div>
        <div><b>Looking for a job:</b> {userProfile.lookingForAJob ? 'yes' : 'no'} </div>
        {userProfile.lookingForAJob && <div><b>My Professional Skils:</b> {userProfile.lookingForAJobDescription} </div>}
       
        <div><b>About Me:</b> {userProfile.aboutMe} </div>
        <div><b>Contacts:</b> {Object.keys(userProfile.contacts).map(key=>{
           return <Contacts key={key} contactTitle={key} contactValue={userProfile.contacts[key]}/>
        })} </div>

    </div>
    )
}

const Contacts = ({contactTitle, contactValue})=>{
    return <div className={classes.contacts}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;