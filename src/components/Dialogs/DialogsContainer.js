import React from 'react'
import {connect} from "react-redux"
import Dialogs from "./Dialogs"

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer
