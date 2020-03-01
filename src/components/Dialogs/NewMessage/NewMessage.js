import React from "react"
import styles from './NewMessage.module.scss'


const NewMessage = (props) => {
    const onSendMessage = () => {
        props.sendMessage()
    }

    const onNewMessageTextChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={styles.newMessage}>
            <textarea
                placeholder='Enter your message'
                value={props.newMessageText}
                onChange={onNewMessageTextChange}
            />
            <button
                onClick={onSendMessage}
            >Send message</button>
        </div>
    )
}

export default NewMessage
