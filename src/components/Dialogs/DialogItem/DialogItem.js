import React from 'react'
import styles from './DialogItem.module.scss'
import {NavLink} from "react-router-dom"

const DialogItem = ({id, name}) => {
    let path = `/dialogs/${id}`

    return (
        <div className={styles.dialog}>
            <img src='' alt=''/>
            <NavLink to={path} activeClassName={styles.active}>
                {name}
            </NavLink>
        </div>
    )
}

export default DialogItem
