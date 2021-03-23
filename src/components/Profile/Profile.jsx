import React from 'react';
import classes from './Profile.module.css';
import PostContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div >

            <ProfileInfo isOwner={props.isOwner}
                         updateProfile={props.updateProfile}
                         savePhoto={props.savePhoto}
                         userProfile={props.userProfile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <div >
                <PostContainer/>
            </div>
        </div>
    )
}
export default Profile;