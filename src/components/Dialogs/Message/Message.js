import React from 'react'
import styles from './Message.module.scss'

const Message = (props) => {
    let classes = [styles.message]

    if (props.sender === 'Mark') {
        classes.push(styles.myMessage)
    }

    return (
        <div className={classes.join(' ')}>
            <div>
                <img src='' alt=''/>
                <span>{props.sender}</span>
            </div>
            <div>
                <span>{props.time}</span>
                <div>{props.text}</div>
            </div>
        </div>
    )
}

export default Message
