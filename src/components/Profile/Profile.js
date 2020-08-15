import React from 'react'
import styles from './Profile.module.scss'
import Info from "./Info/Info"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import Preloader from "../common/Preloader"

const Profile = ({profile, status, updateProfileStatus}) => {
    if (!profile) return <Preloader />

    return (
        <div className={styles.content}>
            <MyPostsContainer />
            <Info profile={profile} status={status} updateStatus={updateProfileStatus} />
        </div>
    )
}

export default Profile
