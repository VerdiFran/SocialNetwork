import React from "react"
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogsReducer"
import NewMessage from "./NewMessage"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => dispatch(updateNewMessageTextCreator(text)),
        sendMessage: () => dispatch(sendMessageCreator())
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

export default NewMessageContainer
