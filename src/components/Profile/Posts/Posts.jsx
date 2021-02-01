import React from 'react';
import classes from './Posts.module.css';
import OnePost from './OnePost/OnePost';

const Post = (props)=>{
    let newPostElement = React.createRef();
    let onAddPost = () =>{
        props.addPost();
    }
    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        
    }
    return (
        
        <div className={classes.myPosts}>
            <dic className={classes.newPost}>
                <textarea onChange={onPostChange} ref={newPostElement} type='text' cols='30' rows='3' placeholder='Enter your new post' value={props.newPostText}></textarea>
                <button  onClick={onAddPost} type='submit'>Send post</button>
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
}
export default Post;