import React from 'react';
import Posts from './Posts';
import {addPostActionCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';




let mapStateToProps = (state) =>{

    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) =>{

    return {

        addPost: (newPostElement)=>{
            dispatch(addPostActionCreator(newPostElement))
        }
        
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostContainer;