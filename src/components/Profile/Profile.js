import React from 'react'
import styles from './Profile.module.scss'
import Info from "./Info/Info"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import Preloader from "../common/Preloader"

const Profile = (props) => {
    if (!props.profile) return <Preloader />

    return (
        <div className={styles.content}>
            <MyPostsContainer />
            <Info profile={props.profile} status={props.status} updateStatus={props.updateProfileStatus} />
        </div>
    )
}

export default Profile
