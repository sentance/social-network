import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { follow,  unfollow, setCurrentPage,   toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../Loader/Loader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
class UsersContainer extends Component{

    componentDidMount(){
       this.props.getUsers(this.props.currentPage, this.props.pageSize) 
    }

    onpageChanged =(pageNumber)=>{
        
        this.props.getUsers(pageNumber, this.props.pageSize);
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
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        users: state.users.users,
        isAuth: state.auth.isAuth,
        isFetching: state.users.isFetching,
        followingProgress: state.users.followingInProgress,

    }
}

export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
}), withAuthRedirect)(
    UsersContainer
)



