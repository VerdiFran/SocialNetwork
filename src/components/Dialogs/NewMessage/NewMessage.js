import React from "react"
import styles from './NewMessage.module.scss'
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/state"


const NewMessage = (props) => {
    let newMessageElement = React.createRef()

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageTextCreator(text))
    }

    return (
        <div className={styles.newMessage}>
            <textarea
                placeholder='Enter your message'
                value={props.newMessageText}
                ref={newMessageElement}
                onChange={onNewMessageChange}
            />
            <button
                onClick={onSendMessageClick}
            >Send message</button>
        </div>
    )
}

export default NewMessage
