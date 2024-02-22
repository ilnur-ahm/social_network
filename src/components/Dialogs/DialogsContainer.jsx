import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



let mapStatetoProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
       updateNewMessageBody: () => {dispatch(sendMessageCreator())},
       sendMessage: (body) => {dispatch(updateNewMessageBodyCreator(body))}
     }
}

const DialogsContainer = connect(mapStatetoProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;