import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {setUserProfile, toggleIsFetching} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
        .then(response=>{
            this.props.setUserProfile(response.data)
        })
        
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

export default connect (mapStateToProps, {setUserProfile, toggleIsFetching})(WithUrlDataContainerComponent);


