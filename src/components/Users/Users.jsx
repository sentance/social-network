import React from 'react';
import classes from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({totalUsersCount, currentPage,onpageChanged,pageSize, followingProgress, unfollow, follow, users, ...props})=> {

     return (
            <>
               <Paginator 
                    totalItemsCount={totalUsersCount}
                    selectedPage={currentPage}
                    onpageChanged={onpageChanged}
                    pageSize={pageSize}
                />
                <div>
                {users.map(user=>
                    <User 
                    key={user.id}
                    unfollow={unfollow}
                    user={user} 
                    followingProgress={followingProgress}
                    follow={follow}/>
                )}
                </div>
                <div className={classes.showMore}><button className={classes.showMoreButton}>show more</button> </div>
            </>
        )
    }


export default Users;