import React, { Component }  from 'react';
import {connect} from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setUsersCount, toggleIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Loader from '../Loader/Loader';

class UsersContainer extends Component{

    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response=>{
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
        })
        
    }

    onpageChanged =(pageNumber)=>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response=>{
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
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
        isFetching: state.users.isFetching
    }
}



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersCount,
    toggleIsFetching
})(UsersContainer);

