import React from 'react';
import classes from './NewPost.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/state';


const newPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () =>{
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = ()=>{
       
        let text = newPostElement.current.value;
        // let action = {
        //     type: 'UPDATE-NEW-POST-TEXT', 
        //     newText: text
        // }
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
            <dic className={classes.newPost}>
                <textarea onChange={onPostChange} ref={newPostElement} type='text' cols='30' rows='3' placeholder='Enter your new post' value={props.newPostText}></textarea>
                <button  onClick={addPost} type='submit'>Send post</button>
            </dic>
    )
}

export default newPost;