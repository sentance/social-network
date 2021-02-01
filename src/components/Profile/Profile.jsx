import React from 'react';
import classes from './Profile.module.css';
import PostContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={classes.content}>
            <ProfileInfo />
      <div className={classes.item}>
            <PostContainer />
      </div>
    </div>
  )
}
export default Profile;