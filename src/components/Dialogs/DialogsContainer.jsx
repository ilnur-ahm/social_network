import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


let mapStatetoProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {dispatch(sendMessageCreator(newMessageBody))},
     }
}

export default compose(
    connect(mapStatetoProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);