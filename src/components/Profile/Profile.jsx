import React from 'react';
import classes from './Profile.module.css';
import PostContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  

  return (
    <div className={classes.content}>
           
            <ProfileInfo userProfile={props.userProfile} status={props.status} updateStatus={props.updateStatus}/>
      <div className={classes.item}>
            <PostContainer />
      </div>
    </div>
  )
}
export default Profile;