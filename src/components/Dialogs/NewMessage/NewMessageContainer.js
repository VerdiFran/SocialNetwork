import React from "react"
import {sendMessage, updateNewMessageText} from "../../../redux/dialogsReducer"
import NewMessage from "./NewMessage"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => dispatch(updateNewMessageText(text)),
        sendMessage: () => dispatch(sendMessage())
    }
}*/

const NewMessageContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage})(NewMessage)

export default NewMessageContainer
