import React from 'react'
import styles from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src='https://facts.net/wp-content/uploads/2016/02/cat-1046544_1920.jpg'/>
            <div className={styles.text}>
                {props.text}
            </div>
            <div className={styles.likes}>
                {props.likesCount} likes
            </div>
        </div>
    )
}

export default Post
