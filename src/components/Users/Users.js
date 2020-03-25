import React from 'react'
import styles from './Users.module.scss'
import {NavLink} from "react-router-dom"
import * as axios from "axios"
import {usersAPI} from "../../api/api"

const Users = (props) => {
    return (
        <div className={styles.userContainer}>
            <div className={styles.userList}>
                {
                    props.users.map(user => (
                        <div className={styles.user} key={user.id}>
                            <NavLink to={`/profile/${user.id}`}>
                                <div>
                                    <img src={user.photos.large} alt=''/>
                                </div>
                            </NavLink>
                            <div>{user.name}</div>
                            <div>{'user.location.city'}</div>
                            <div>{'user.location.country'}</div>
                            {
                                user.followed
                                    ? <button
                                        className={`${styles.followBtn} ${styles.followed}`}
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {props.unfollow(user.id)}}
                                    >Unfollow</button>
                                    : <button
                                        className={styles.followBtn}
                                        disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {props.follow(user.id)}}
                                    >Follow</button>
                            }
                        </div>
                    ))
                }
                {props.users.length < props.totalUsersCount && <button
                    className={styles.moreUsersBtn}
                    onClick={props.getMoreUsers}
                >More users
                </button>}
            </div>
        </div>
    )
}

export default Users
