import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {toggleIsFetching, getUserProfile} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId)      
    }

    render()

    {return(<Profile {...this.props} userProfile={this.props.userProfile}/>)}
}


let mapStateToProps = (state)=>{
  
    return {
        userProfile: state.profilePage.userProfile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getUserProfile, toggleIsFetching})(WithUrlDataContainerComponent);


