import React from 'react'
import s from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><a href="#a">Profile</a></div>
            <div><a href="#a">Messages</a></div>
            <div><a href="#a">News</a></div>
            <div><a href="#a">Music</a></div>
            <div><a href="#a">Settings</a></div>
        </nav>
    )
}

export default Navbar
