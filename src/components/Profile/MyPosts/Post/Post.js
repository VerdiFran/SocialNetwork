import React from 'react'
import styles from './Post.module.scss'

const Post = ({text, likesCount}) => {
    return (
        <div className={styles.post}>
            <img src='https://facts.net/wp-content/uploads/2016/02/cat-1046544_1920.jpg' alt='profileImage'/>
            <div className={styles.text}>
                {text}
            </div>
            <div className={styles.likes}>
                {likesCount} likes
            </div>
        </div>
    )
}

export default Post
