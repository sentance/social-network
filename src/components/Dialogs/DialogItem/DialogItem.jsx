import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' +  props.id;
    return (
        <div className={classes.dialog}>
            <img src={props.friendpic} alt='avafriend'/>
            <NavLink activeClassName={classes.active} className={classes.friendlink} to={path}>{props.name}</NavLink>
        </div>
    )
    
}

export default DialogItem