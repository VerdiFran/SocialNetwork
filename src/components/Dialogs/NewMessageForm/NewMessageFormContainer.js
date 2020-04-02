import React from "react"
import {sendMessage, updateNewMessageText} from "../../../redux/dialogsReducer"
import NewMessageForm from "./NewMessageForm"
import {connect} from "react-redux"

const mapStateToProps = (state) => ({
    newMessageText: state.dialogsPage.newMessageText
})

const NewMessageFormContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage})(NewMessageForm)

export default NewMessageFormContainer
