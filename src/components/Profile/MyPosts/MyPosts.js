import React from 'react'
import Post from "./Post/Post"
import styles from './MyPosts.module.scss'
import NewPostForm from "./NewPostForm/NewPostForm"

const MyPosts = React.memo(({posts, addPost}) => {
    const addNewPost = (values) => addPost(values.newPostText)

    return (
        <div className={styles.postContainer}>
            <h2>My posts</h2>
            <div className={styles.newPost}>
                <NewPostForm onSubmit={addNewPost} />
            </div>
            <div className={styles.postList}>
                {posts.map(post =>
                    <Post
                        text={post.text}
                        likesCount={post.likesCount}
                        key={post.id}
                    />)
                }
            </div>
        </div>
    )
})

export default MyPosts
