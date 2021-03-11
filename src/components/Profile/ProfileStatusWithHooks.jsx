import React, { useState } from 'react';

import Profile from './Profile';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {toggleIsFetching, getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import { compose } from 'redux';

const ProfileStatusWithHooks = (props)=> {
    let [editMode, setEditmode] = useState(false);
    let [status, updateStatus] = useState(props.status);


    return  (
    <Profile {...this.props} 
        userProfile={this.props.userProfile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}/>
    )

}

let mapStateToProps = (state)=>{
  
    return {
      
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    }
}

export default compose(connect (mapStateToProps, 
    {getUserProfile, toggleIsFetching, getStatus, updateStatus}),
     withRouter
    )(ProfileStatusWithHooks)



