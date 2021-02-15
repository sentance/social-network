import React from 'react';
import classes from './Loader.module.css';

const Loader = () =>{
    return (
        <div className={classes.preloader}>
            <div className={classes.spinner}></div>
        </div>
    )
    
}

export default Loader;