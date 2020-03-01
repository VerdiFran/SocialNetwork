import React from 'react'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import styles from './Dialogs.module.scss'
import NewMessageContainer from "./NewMessage/NewMessageContainer"

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.messages}>
                {props.messages.map(message =>
                    <Message
                        text={message.text}
                        key={message.id}
                        sender={message.sender}
                        time={message.time}
                    />)
                }
            </div>
            <div className={styles.dialogsItems}>
                {props.dialogs.map(dialog =>
                    <DialogItem
                        name={dialog.name}
                        id={dialog.id}
                        key={dialog.id}
                    />)}
            </div>
            <NewMessageContainer/>
        </div>)
}

export default Dialogs
