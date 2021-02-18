import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setUsersCount, toggleIsFetching, toggleFollowingProgress } from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../Loader/Loader';
import {userAPI} from '../../api/api';
class UsersContainer extends Component{

    componentDidMount(){
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data=>{
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersCount(data.totalCount);
                
        })
        
    }

    onpageChanged =(pageNumber)=>{

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        userAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data=>{
            this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                
        })
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
        isFetching: state.users.isFetching,
        followingProgress: state.users.followingInProgress,

    }
}



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer);

