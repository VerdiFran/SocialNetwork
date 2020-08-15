import React from 'react'
import {connect} from "react-redux"
import Dialogs from "./Dialogs"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"
import {sendMessage} from "../../redux/reducers/dialogsReducer"

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    //withAuthRedirect
)(Dialogs)
