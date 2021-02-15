import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';



let mapStateToProps = (state) =>{
 
    return {
        dialogsPage: state.userProfile
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBodyCreator: (body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;