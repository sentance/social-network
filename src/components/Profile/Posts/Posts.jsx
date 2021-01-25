import React from 'react';
import classes from './Posts.module.css';
import NewPost from './NewPost/NewPost';
import OnePost from './OnePost/OnePost';


const Post = (props)=>{
    return (
        
        <div className={classes.myPosts}>
            <NewPost addPost={props.addPost} updateNewPostText={props.updateNewPostText} dispatch={props.dispatch} newPostText={props.newPostText}/>
        <div className={classes.allPosts}>
            {props.postData.map(post=>{
                return(<OnePost 
                    text={post.text}
                    img={post.img}
                    likeCount={post.likeCount}
                />)
            })}
            
           
        </div>
        </div>
    )
}
export default Post;