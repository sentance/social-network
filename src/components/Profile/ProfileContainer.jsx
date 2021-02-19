import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {toggleIsFetching, getUserProfile} from '../../redux/profile-reducer';
import { Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId)      
    }

    render(){
        if(!this.props.isAuth) {
            return <Redirect to='/login'/>
        }
        return(<Profile {...this.props} userProfile={this.props.userProfile}/>)
    }
}


let mapStateToProps = (state)=>{
  
    return {
        isAuth: state.auth.isAuth,
        userProfile: state.profilePage.userProfile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getUserProfile, toggleIsFetching})(WithUrlDataContainerComponent);


