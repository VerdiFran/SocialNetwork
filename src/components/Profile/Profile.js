import React from 'react'
import s from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts"
import Info from "./Info/Info"

const Profile = () => {
    return (
        <div className={s.content}>
            <Info/>
            <MyPosts/>
        </div>
    )
}

export default Profile
