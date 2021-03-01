import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {toggleIsFetching, getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount(){
        
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 14992;
        }
        this.props.getUserProfile(userId)      
        this.props.getStatus(userId)      
    }

    render(){
       
        return(<Profile {...this.props} userProfile={this.props.userProfile} status={this.props.status} updateStatus={this.props.updateStatus}/>)
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)




let mapStateToProps = (state)=>{
  
    return {
      
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status
    }
}

export default compose(connect (mapStateToProps, 
    {getUserProfile, toggleIsFetching, getStatus, updateStatus}),
     withRouter
    //   withAuthRedirect
    )(ProfileContainer)

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect (mapStateToProps, {getUserProfile, toggleIsFetching})(WithUrlDataContainerComponent);


