import React from 'react'
import {Field, reduxForm} from "redux-form"

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder='Enter text'
                name={'newPostText'}
                component={'textarea'}
            />
            <button>Add post</button>
        </form>
    )
}

export default reduxForm({form: 'newPostForm'})(NewPostForm)
