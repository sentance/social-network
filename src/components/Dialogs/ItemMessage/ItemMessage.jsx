import React from  'react';
import classes from './ItemMessage.module.css';

const ItemMessage = (props) => {
    return (
        <div className={classes.message}>
                {props.text}
        </div>
    )
}

export default ItemMessage;