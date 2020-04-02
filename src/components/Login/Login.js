import React from 'react'
import {Field, reduxForm} from "redux-form"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={'login'} />
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={'password'} />
            </div>
            <div>
                <Field id={'remember'} type={'checkbox'} component={'input'} name={'rememberMe'} />
                <label htmlFor={'remember'}>remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            Login
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login
