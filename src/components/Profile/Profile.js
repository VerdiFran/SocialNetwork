import React from 'react'
import styles from './Profile.module.scss'
import Info from "./Info/Info"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <MyPostsContainer />
            <Info />
        </div>
    )
}

export default Profile
