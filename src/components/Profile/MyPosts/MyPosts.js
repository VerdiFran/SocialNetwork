import React from 'react'
import Post from "./Post/Post"
import s from './MyPosts.module.scss'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <Post message='Hi! How are you?' />
            <Post message="It's my first post" />
        </div>
    )
}

export default MyPosts
