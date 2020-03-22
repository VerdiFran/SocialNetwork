import React from "react"
import Profile from "./Profile"
import * as axios from "axios"
import {setUserProfile} from "../../redux/profileReducer"
import {connect} from "react-redux"
import Preloader from "../common/Preloader"
import {withRouter} from "react-router-dom"

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))
