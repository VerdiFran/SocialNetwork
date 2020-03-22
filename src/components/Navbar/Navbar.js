import React from 'react'
import styles from './Navbar.module.scss'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink></div>
            <div><NavLink to="/users" activeClassName={styles.active}>Users</NavLink></div>
            <div><NavLink to="/news" activeClassName={styles.active}>News</NavLink></div>
            <div><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></div>
            <div><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></div>
        </nav>
    )
}

export default Navbar
