import React from 'react';
import classes from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={classes.content}>

      <ProfileInfo dialogsData={props.state.dialogsData}  messagesData={props.state.messagesData} />
      
  
      <div className={classes.item}>
        
          <Posts 
          postData={props.state.postData} 
          dispatch={props.dispatch}
          newPostText={props.newPostText}/>
       
      </div>
    </div>
  )
}
export default Profile;