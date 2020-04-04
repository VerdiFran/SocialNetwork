import React from "react"
import styles from './NewMessageForm.module.scss'
import {Field, reduxForm} from "redux-form"
import {Textarea} from "../../common/FormControls/FormControls"
import {maxLength} from "../../../utils/validators/validators"

const maxLength1000 = maxLength(1000)

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.newMessage}>
            <Field
                placeholder='Enter your message'
                name={'newMessageText'}
                component={Textarea}
                validate={[maxLength1000]}
            />
            <button>Send message</button>
        </form>
    )
}

export default reduxForm({form: 'newMessageForm'})(NewMessageForm)
