import React from 'react'
import styles from './CurrentUserInfo.module.scss'
import {NavLink} from "react-router-dom"

const CurrentUserInfo = (props) => {
    return (
        <div className={styles.currentUserInfo}>
            {props.isAuth
                ? <div>
                    {props.login}
                </div>
                : <NavLink to='/login'>
                    Login
                </NavLink>
            }
        </div>
    )
}

export default CurrentUserInfo
