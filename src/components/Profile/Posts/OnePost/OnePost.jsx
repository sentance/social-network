import React from 'react';
import classes from './OnePost.module.css';

const OnePost = (props) => {
    return (
        <div className={classes.onepost}>
            <img alt='hello' src={props.img} />
            <p>{props.text}</p>
        <span><a href='#'>Like</a><sup>{props.likeCount}</sup></span>
        
        </div>
    )
}
export default OnePost;