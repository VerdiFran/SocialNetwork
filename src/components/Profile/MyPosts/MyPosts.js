import React from 'react'
import Post from "./Post/Post"
import styles from './MyPosts.module.scss'

const MyPosts = (props) => {
    let onAddPost = () => {
        props.addPost()
    }

    let onNewPostTextChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.postContainer}>
            <h2>My posts</h2>
            <div className={styles.newPost}>
                <textarea
                    placeholder='Enter text'
                    value={props.newPostText}
                    onChange={onNewPostTextChange}
                />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={styles.postList}>
                {props.posts.map(post =>
                    <Post
                        text={post.text}
                        likesCount={post.likesCount}
                        key={post.id}
                    />)
                }
            </div>
        </div>
    )
}

export default MyPosts
