import React from 'react'
import s from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src='https://facts.net/wp-content/uploads/2016/02/cat-1046544_1920.jpg'/>
            {props.message}
        </div>
    )
}

export default Post
