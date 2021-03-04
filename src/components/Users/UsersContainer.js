import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { follow,  unfollow, setCurrentPage,   toggleFollowingProgress, requestUsers } from '../../redux/users-reducer';
import {getPageSize, gettotalUsersCount, getCurrentPage, getUsers, getIsFetching, getFollowingIsProgress} from '../../redux/users-selectors';
import Users from './Users';
import Loader from '../Loader/Loader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
class UsersContainer extends Component{

    componentDidMount(){
       this.props.requestUsers(this.props.currentPage, this.props.pageSize) 
    }

    onpageChanged =(pageNumber)=>{
        
        this.props.requestUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber)
    }
    render(){
       
        return <>
        
                {this.props.isFetching ? <Loader/> : 
                
                <Users 
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onpageChanged={this.onpageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingProgress={this.props.followingProgress}
                />
                }
                
        </>
    }
    
    
}


let mapStateToProps = (state) =>{
    
    return {
        pageSize: getPageSize(state),
        totalUsersCount: gettotalUsersCount(state),
        currentPage: getCurrentPage(state),
        users: getUsers(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingIsProgress(state),

    }
}

export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
}), withAuthRedirect)(
    UsersContainer
)



