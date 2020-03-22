import React from 'react'
import styles from './Users.module.scss'
import {NavLink} from "react-router-dom"
import * as axios from "axios"

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
                                        onClick={() => {
                                            axios
                                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            'API-KEY': '9a818970-b58c-4bf2-9d67-b5d1ac597540'
                                                        }
                                                    })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(user.id)
                                                    }
                                                })
                                        }}
                                    >Unfollow</button>
                                    : <button
                                        className={styles.followBtn}
                                        onClick={() => {
                                            axios
                                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                    {}, {
                                                        withCredentials: true,
                                                        headers: {
                                                            'API-KEY': '9a818970-b58c-4bf2-9d67-b5d1ac597540'
                                                        }
                                                    })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(user.id)
                                                    }
                                                })
                                        }}
                                    >Follow</button>
                            }
                        </div>
                    ))
                }
                <button
                    className={styles.moreUsersBtn}
                    onClick={props.getMoreUsers}
                >More users
                </button>
            </div>
        </div>
    )
}

export default Users
