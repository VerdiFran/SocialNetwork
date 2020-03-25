import React from "react"
import Profile from "./Profile"
import {getUserProfile} from "../../redux/profileReducer"
import {connect} from "react-redux"
import Preloader from "../common/Preloader"
import {withRouter} from "react-router-dom"

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <>
                {!this.props.profile ? <Preloader/> :
                    <div>
                        <Profile {...this.props} profile={this.props.profile}/>
                    </div>
                }
            </>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer))
