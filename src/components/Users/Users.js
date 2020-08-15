import React from 'react'
import styles from './Users.module.scss'
import User from './User/User'

const Users = (props) => {
    return (
        <div className={styles.userContainer}>
            <div className={styles.userList}>
                {props.users.map(user =>
                    <User
                        user={user}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                    />)}
                {
                    props.users.length < props.totalUsersCount && <button
                        className={styles.moreUsersBtn}
                        onClick={props.getMoreUsers}
                    >More users</button>
                }
            </div>
        </div>
    )
}

export default Users
