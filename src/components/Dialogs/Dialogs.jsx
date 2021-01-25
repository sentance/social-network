import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import ItemMessage from './ItemMessage/ItemMessage';


const Dialog = (props) => {
    let dialogs = props.state.dialogsData.map( dialog=>{
        return(<div className={classes.dialog}>
                
                <DialogItem id={dialog.id} friendpic={dialog.friendpic} name={dialog.name} />
            </div>)
    })
    let messages =  props.state.messagesData.map(message =>{
        return (
        <div className={classes.message}>
            <ItemMessage text={message.text}/>
        </div>
    )
    })
    let messageToSend = React.createRef();
    let printToMon = ()=>{
        let text = messageToSend.current.value;
        alert(text)
    }
    return (
            <div className={classes.dialogs}>
                 <div className={classes.dialogsItems + ' ' + classes.active}>
                {dialogs}
                 </div>
                


                
                {/* <div className={classes.dialogue}>
                {messages}
                </div> */}
                <div className={classes.dialogue}>
                    <div className={classes.user +' ' + classes.remote} >
                    <div className={classes.avatar}>
                        <div className={classes.pic}>
                            <img src="https://picsum.photos/100/100/?random=1"/>
                        </div>
                    <div className={classes.name}>Albee</div>
                    </div>
                        <div className={classes.txt}>
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>

                    <div className={classes.user +' ' + classes.local} >
                    <div className={classes.avatar}>
                        <div className={classes.pic}>
                            <img src="https://picsum.photos/100/100/?random=8"/>
                        </div>
                    <div className={classes.name}>Albee</div>
                    </div>
                        <div className={classes.txt}>
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                    <textarea ref={messageToSend} placeholder='hello'></textarea>
                    <button onClick={printToMon} type='submit'>Send message</button>

                </div>

                </div>
        )
}

export default Dialog;