import React from 'react'
import styles from './Message.module.scss'

const Message = ({sender, time, text}) => {
    let classes = [styles.message]

    if (sender === 'Mark') {
        classes.push(styles.myMessage)
    }

    return (
        <div className={classes.join(' ')}>
            <div>
                <img src='' alt=''/>
                <span>{sender}</span>
            </div>
            <div>
                <span>{time}</span>
                <div>{text}</div>
            </div>
        </div>
    )
}

export default Message
