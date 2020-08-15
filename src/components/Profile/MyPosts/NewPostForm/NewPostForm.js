import React from 'react'
import {Field, reduxForm} from "redux-form"
import {maxLength} from "../../../../utils/validators/validators"
import {Textarea} from "../../../common/FormControls/FormControls"

const maxLength10000 = maxLength(10000)

const NewPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                placeholder='Enter text'
                name={'newPostText'}
                component={Textarea}
                validate={[maxLength10000]}
            />
            <button>Add post</button>
        </form>
    )
}

export default reduxForm({form: 'newPostForm'})(NewPostForm)
