import React from 'react'
import CurrentUserInfo from "./CurrentUserInfo"
import {connect} from "react-redux"
import {getAuthUserData} from "../../redux/authReducer"

class CurrentUserInfoContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (<CurrentUserInfo {...this.props}/>)
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData})(CurrentUserInfoContainer)
