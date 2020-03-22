import React from 'react'
import Users from "./Users"
import {connect} from "react-redux"
import {follow, setTotalUsersCount, setUsers, toogleIsFetching, unfollow} from "../../redux/usersReducer"
import * as axios from "axios"
import Preloader from "../common/Preloader"

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toogleIsFetching(true)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                    {
                        withCredentials: true
                    })
                .then(response => {
                    this.props.toogleIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    getMoreUsers = () => {
        if (this.props.users.length < this.props.totalUsersCount) {
            this.props.toogleIsFetching(true)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                    {
                        withCredentials: true
                    })
                .then(response => {
                    this.props.toogleIsFetching(false)
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    getMoreUsers={this.getMoreUsers}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
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
        isFetching: state.usersPage.isFetching
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(follow(userId)),
        unfollow: (userId) => dispatch(unfollow(userId)),
        setUsers: (users) => dispatch(setUsers(users)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
        toogleIsFetching: (isFetching) => dispatch(toogleIsFetching(isFetching))
    }
}*/

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setTotalUsersCount, toogleIsFetching
})(UsersContainer)
