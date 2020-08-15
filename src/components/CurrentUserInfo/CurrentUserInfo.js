import React from 'react'
import styles from './CurrentUserInfo.module.scss'
import {NavLink} from "react-router-dom"

const CurrentUserInfo = ({isAuth, login, logout}) => {
    return (
        <div className={styles.currentUserInfo}>
            {isAuth
                ? <div>
                    {login}
                    <button onClick={logout}>Logout</button>
                </div>
                : <NavLink to='/login'>
                    Login
                </NavLink>
            }
        </div>
    )
}

export default CurrentUserInfo
