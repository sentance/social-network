import React from 'react';
import classes from './Users.module.css';
import avadafault from '../../pictures/defaultava.jpg';
import { NavLink } from 'react-router-dom';
import {userAPI} from '../../api/api';

let Users = (props)=> {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) ;
    let pages = [];
    
    for(let i=1; i <= pagesCount; i++){
        pages.push(i)
    }
     return (
            <>
               <div>
                   {pages.map(page=>{
                       return(<span onClick={(e)=>{props.onpageChanged(page)}} className={props.currentPage === page  ? classes.active : classes.notselected}>{page}</span>)
                       
                   })}
                  
               </div>
                <div className={classes.dialogs}>
                    {props.users.map(user=>{
                        return(<div className={classes.user +' ' + classes.remote} >
                        <div key={user.id} className={classes.avatar}>
                            <div className={classes.pic}>
                           <NavLink to={'/profile/' + user.id} >   <img alt='Avatar' src={user.photos.small != null ? user.photos.small : avadafault}/></NavLink>  
                            </div>
                        
                        { user.followed ? 
                            <button disabled={props.followingProgress.some(id=>id===user.id)} onClick={()=>{
                              
                                props.toggleFollowingProgress(true, user.id)
                                
                                userAPI.unfolowUser(user.id)
                                .then(data=>{
                                      if(data.resultCode === 0){
                                           props.unfollow(user.id)
                                      }
                                      props.toggleFollowingProgress(false, user.id)
                                })
                            }} className={classes.button}> Unfollow</button> :
                            <button disabled={props.followingProgress.some(id=>id===user.id)} onClick={()=>{
                                props.toggleFollowingProgress(true, user.id)
                                userAPI.followUser(user.id)
                                .then(data=>{
                                      if(data.resultCode === 0){
                                            props.follow(user.id)
                                      }
                                      props.toggleFollowingProgress(false, user.id)
                                })
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
                                
                        </div> )
                    })}
                                    
                    </div>
                    <div className={classes.showMore}><button className={classes.showMoreButton}>show more</button> </div>
            </>
        )
    }


export default Users;