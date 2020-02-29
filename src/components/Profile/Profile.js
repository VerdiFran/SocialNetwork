import React from 'react'
import styles from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts"
import Info from "./Info/Info"

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <MyPosts
                posts={props.data.posts}
                newPostText={props.data.newPostText}
                dispatch={props.dispatch}
            />
            <Info />
        </div>
    )
}

export default Profile
