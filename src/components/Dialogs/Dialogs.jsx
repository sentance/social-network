import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import {Formik, Field} from 'formik'



const Dialog = (props) => {
    
    let state = props.dialogsPage;
   
    let dialogsElements = state.dialogs.map( dialog=>{
       
        return(<div className={classes.dialog}>
                
                <DialogItem id={dialog.id+1} key={dialog.id} friendpic={dialog.friendpic} name={dialog.name} />
            </div>)
    })

    let messages =  state.messages.map(message =>{
        return (
        <div key={message.id} className={classes.user +' ' + classes.remote} >
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
                    <MessageForm onSubmit={onSendMessageClick} />
               
                </div>
                </div>
        )
}

const MessageForm =({onSubmit})=>{
    return (
        <Formik
        initialValues={{
            newPostElement: ''
        }}
        onSubmit={(values) => {
            onSubmit(values)
            
        }}
        >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting})=>(
                <form onSubmit={handleSubmit}>
                    <div>
                    <Field  placeholder={'Message'} name={'newMessageBody'}  component={'textarea'} />
                    </div>
                    
                    <div>
                    <button>Send message</button>
                    </div>
                </form>
            )}
        </Formik>
    
        )
}


export default Dialog;