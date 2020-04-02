import React from "react"
import Profile from "./Profile"
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../../redux/profileReducer"
import {connect} from "react-redux"
import Preloader from "../common/Preloader"
import {withRouter} from "react-router-dom"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2
        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <>
                {!this.props.profile ? <Preloader/> :
                    <div>
                        <Profile {...this.props}/>
                    </div>
                }
            </>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)
