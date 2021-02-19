import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import { Redirect } from 'react-router-dom';

const Dialog = (props) => {
    
    let state = props.dialogsPage;
   
    let dialogsElements = state.dialogs.map( dialog=>{
        if(!props.isAuth) {
            return <Redirect to='/login'/>
            }
         
        return(<div className={classes.dialog}>
                
                <DialogItem id={dialog.id} friendpic={dialog.friendpic} name={dialog.name} />
            </div>)
    })

    let messages =  state.messages.map(message =>{
        return (
        <div className={classes.user +' ' + classes.remote} >
            <div className={classes.avatar}>
                <div className={classes.pic}>
                    <img src="https://picsum.photos/100/100/?random=1"/>
                </div>
            <div className={classes.name}>Albee</div>
            </div>
                <div className={classes.txt}>
                {message.message}
            </div>
        </div>
    )
    })
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e)=>{
        let body =  e.target.value;
        props.updateNewMessageBodyCreator(body);
    }
    let onSendMessageClick = ()=>{
        props.sendMessage()
    }
    return (
                <div className={classes.dialogs}>
                 <div className={classes.dialogsItems + ' ' + classes.active}>
                    {dialogsElements}
                 </div>
                <div className={classes.dialogue}>
                    {messages}
                    <textarea onChange={onNewMessageChange}  placeholder='hello' value={newMessageBody}></textarea>
                    <button onClick={onSendMessageClick} >Send message</button>
                </div>
                </div>
        )
}

export default Dialog;