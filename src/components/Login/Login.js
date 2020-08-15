import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required} from '../../utils/validators/validators'
import {connect} from 'react-redux'
import {login} from '../../redux/reducers/authReducer'
import {Redirect} from 'react-router-dom'
import formStyles from './../common/FormControls/FormControls.module.scss'

const LoginForm = ({error, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={'login'} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={'password'} type='password'
                       validate={[required]}/>
            </div>
            <div>
                <Field id={'remember'} type={'checkbox'} component={'input'} name={'rememberMe'}/>
                <label htmlFor={'remember'}>remember me</label>
            </div>
            {
                error && <div className={formStyles.summaryErrorMessage}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)

const Login = ({isAuth, login}) => {
    const onSubmit = (formData) => {
        login(formData.login, formData.password, formData.rememberMe)
    }

    if (isAuth) return <Redirect to='/profile'/>

    return (
        <div>
            Login
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
