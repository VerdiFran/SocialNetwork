import React from "react"
import styles from './NewMessageForm.module.scss'
import {Field, reduxForm} from "redux-form"

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.newMessage}>
            <Field
                placeholder='Enter your message'
                name={'newMessageText'}
                component={'textarea'}
            />
            <button>Send message</button>
        </form>
    )
}

export default reduxForm({form: 'newMessageForm'})(NewMessageForm)
