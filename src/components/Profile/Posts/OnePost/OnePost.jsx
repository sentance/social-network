import React, {useState} from 'react';
import classes from './OnePost.module.css';
import {likePost} from '../../../../redux/profile-reducer';
const  OnePost = (props) => {
    
    const [likeCount = props.likeCount, setLikeCount] = useState(props.likeCount);
    const [disabled, setDisabled] = useState(false);
    return (
        <div className={classes.onepost}>
            <img alt='hello' src={props.img} />
            <p>{props.text}</p>
        <span className={classes.likeContainer + '' }>
            <button disabled={disabled} className={classes.like} onClick={()=>{
                setLikeCount(likeCount +1)
                likePost();
                setDisabled(true)
                }} href='#'>Like <sup>{likeCount}</sup>
        </button>
        </span>
        
        </div>
    )
}
export default OnePost;