import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
class DialogsContainer extends React.Component {

    render(){
       
        return(<Dialogs {...this.props} />)
    }
}

let mapStateToProps = (state) =>{
 
    return {
        isAuth: state.auth.isAuth,
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
       
        sendMessage: (newMessageBody)=>{
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(DialogsContainer)


