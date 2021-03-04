import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';

import {reduxForm, Field} from 'redux-form'
import { Textarea } from '../common/FormControls/FormControls';
import { maxLengthCreator, minLengthCreator, required } from '../utils/validators/validators';

const maxLengthCreator10 = maxLengthCreator(10);
const minLengthCreator3 = minLengthCreator(3);

const Dialog = (props) => {
    
    let state = props.dialogsPage;
   
    let dialogsElements = state.dialogs.map( dialog=>{
       
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
    // let newMessageBody = state.newMessageBody;

    // let onNewMessageChange = (e)=>{
    //     let body =  e.target.value;
    //     props.updateNewMessageBodyCreator(body);
    // }
    let onSendMessageClick = (value)=>{
        props.sendMessage(value.newMessageBody)
    }
    return (
                <div className={classes.dialogs}>
                 <div className={classes.dialogsItems + ' ' + classes.active}>
                    {dialogsElements}
                 </div>
                <div className={classes.dialogue}>
                    {messages}
                    <FormMessage onSubmit={onSendMessageClick} />
               
                </div>
                </div>
        )
}

const MessageForm =(props)=>{
    return (
    <form onSubmit={props.handleSubmit}>
            <div>
            <Field  placeholder={'Message'} name={'newMessageBody'} component={Textarea} validate={[required, maxLengthCreator10, minLengthCreator3]}/>
            </div>
            
            <div>
               <button>Send message</button>
            </div>
    </form>
        )
}

const FormMessage = reduxForm({form: 'messageDialogs'})(MessageForm)
export default Dialog;