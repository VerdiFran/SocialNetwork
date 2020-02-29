import React from 'react'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import styles from './Dialogs.module.scss'
import NewMessage from "./NewMessage/NewMessage"

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.messages}>
                { props.data.messages.map(message =>
                    <Message
                        text={message.text}
                        key={message.id}
                        sender={message.sender}
                        time={message.time}
                    />)
                }
            </div>
            <div className={styles.dialogsItems}>
                { props.data.dialogs.map(dialog =>
                    <DialogItem
                        name={dialog.name}
                        id={dialog.id}
                        key={dialog.id}
                    />) }
            </div>
            <NewMessage
                newMessageText={props.data.newMessageText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Dialogs
