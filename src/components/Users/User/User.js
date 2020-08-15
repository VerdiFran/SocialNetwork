import React from 'react'
import styles from './User.module.scss'
import {NavLink} from 'react-router-dom'

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
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
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {unfollow(user.id)}}
                    >Unfollow</button>
                    : <button
                        className={styles.followBtn}
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {follow(user.id)}}
                    >Follow</button>
            }
        </div>
    )
}

export default User
