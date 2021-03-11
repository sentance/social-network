import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';
import avadafault from '../../defaultava.jpg';

const User = ({user, followingProgress, unfollow, follow}) => {
    return (
        <div className={classes.user +' ' + classes.remote} >
        <div key={user.id} className={classes.avatar}>
        <div className={classes.pic}>
           <NavLink to={'/profile/' + user.id} >   
            <img alt='Avatar' src={user.photos.small != null ? user.photos.small : avadafault}/>
            </NavLink>  
        </div>
        
        { user.followed ? 
            <button disabled={followingProgress.some(id=>id===user.id)} onClick={()=>{
                unfollow(user.id)
            }} className={classes.button}> Unfollow</button> :
            <button disabled={followingProgress.some(id=>id===user.id)} onClick={()=>{
                follow(user.id)
            }} className={classes.button}> Follow</button>
        } 
        </div>
        
        <div className={classes.txt}>
                    <div className={classes.location}><span>Ukraine</span><br></br>
                    <span >Kyiv</span></div>
                    
                <div className={classes.name}>{user.name}</div>
                        {user.message}
                    <div className={classes.dialogsButtons}>
                    <span><button className={classes.dialogsButtonsReply}>coomment</button></span>
                    <span ><button className={classes.dialogsButtonsLike}>like</button></span>
                    </div>
                </div> 
                
        </div> 
    )
}

export default User;