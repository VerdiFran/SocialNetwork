import React from 'react'
import Users from "./Users"
import {connect} from "react-redux"
import {follow, getUsers, unfollow} from "../../redux/reducers/usersReducer"
import Preloader from "../common/Preloader"

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    getMoreUsers = () => {
        if (this.props.users.length < this.props.totalUsersCount) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    getMoreUsers={this.getMoreUsers}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, getUsers})(UsersContainer)
