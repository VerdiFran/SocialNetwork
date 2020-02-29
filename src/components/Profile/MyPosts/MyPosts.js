import React from 'react'
import Post from "./Post/Post"
import styles from './MyPosts.module.scss'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state"

const MyPosts = (props) => {
    let newPostElement = React.createRef()

    let onAddPostClick = () => {
        props.dispatch(addPostActionCreator())
    }

    let onNewPostTextChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <div className={styles.postContainer}>
            <h2>My posts</h2>
            <div className={styles.newPost}>
                <textarea
                    placeholder='Enter text'
                    value={props.newPostText}
                    ref={newPostElement}
                    onChange={onNewPostTextChange}
                />
                <button onClick={onAddPostClick}>Add post</button>
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
