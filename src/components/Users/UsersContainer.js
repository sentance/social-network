import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { follow,  unfollow, setCurrentPage,   toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../Loader/Loader';
class UsersContainer extends Component{

    componentDidMount(){
       this.props.getUsers(this.props.currentPage, this.props.pageSize) 
    }

    onpageChanged =(pageNumber)=>{

        this.props.getUsers(pageNumber, this.props.pageSize)
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
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer);

