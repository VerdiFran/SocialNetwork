import React from 'react'
import CurrentUserInfo from "./CurrentUserInfo"
import {connect} from "react-redux"
import {logout} from '../../redux/reducers/authReducer'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

class CurrentUserInfoContainer extends React.Component {
    render() {
        return (<CurrentUserInfo {...this.props}/>)
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose(
    withRouter,
    connect(mapStateToProps, {logout})
)(CurrentUserInfoContainer)
