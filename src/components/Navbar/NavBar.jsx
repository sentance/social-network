import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = (props) => {

    return (
        <nav className={classes.nav}>
            <div className='item'>
                <NavLink to='/profile' activeClassName={classes.active}>profile</NavLink>
                </div>
            <div className='item'>
                <NavLink exact  to='/dialogs' activeClassName={classes.active}>messages</NavLink>
                </div>
            <div className='item'>
                <NavLink exact  to='/users' activeClassName={classes.active}>users</NavLink>
                </div>
            <div className='item'>
                <NavLink  to='/news'>news
                </NavLink>
                </div>
            <div className='item'>
                <NavLink  to='/music'>music
                </NavLink>
                </div>
            <div className='item'>
                <NavLink  to='/settings'>setting</NavLink>
                </div>
                <h3>Friends</h3>
            <div className={classes.friendsList}>
                
                
                    
                    {/* {friendsAvatars}         */}
      
            </div>
          </nav>
    )
}
export default Navbar;