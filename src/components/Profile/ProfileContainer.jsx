import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {toggleIsFetching, getUserProfile, getStatus, updateStatus, savePhoto, updateProfile} from '../../redux/profile-reducer';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)      
        this.props.getStatus(userId)    
    }
    componentDidMount(){
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
        
    }
    render(){
       
        return(
        <Profile 
            {...this.props} 
            isOwner={!this.props.match.params.userId}
            userProfile={this.props.userProfile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />)
    }
}

let mapStateToProps = (state)=>{
  
    return {
      
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    }
}

export default compose(connect (mapStateToProps, 
    {getUserProfile, toggleIsFetching, getStatus, updateStatus, savePhoto, updateProfile}),
     withRouter
    )(ProfileContainer)



