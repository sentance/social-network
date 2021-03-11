import React, {useState} from 'react';
import classes from './Posts.module.css';
import OnePost from './OnePost/OnePost';
import {reduxForm, Field} from 'redux-form'
import {maxLengthCreator, minLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const maxLengthCreator10 = maxLengthCreator(10);
const minLengthCreator3 = minLengthCreator(3);

const Post = React.memo(props =>{
    let onAddPost = (value) =>{
        props.addPost(value.newPostElement);
    }
    
    return (
        
        <div className={classes.myPosts}>
            <dic className={classes.newPost}>
                <PostMessage onSubmit={onAddPost}/>
            </dic>
        <div className={classes.allPosts}>
            {props.posts.map(post=>{
                return(<OnePost 
                    text={post.text}
                    img={post.img}
                    likeCount={post.likeCount}
                />)
            })}
         </div>
        </div>
        
    )
})

const PostForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
                <Field placeholder={'Message'} name={'newPostElement'} component={Textarea}  validate={[required, maxLengthCreator10, minLengthCreator3 ]} ></Field>
                <button >Send post</button>
        </form>
    )
}
const PostMessage = reduxForm({form: 'newPostElement'})(PostForm)

export default Post;