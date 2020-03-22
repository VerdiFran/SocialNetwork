import React from 'react'
import {addPost, updateNewPostText} from "../../../redux/profileReducer"
import MyPosts from "./MyPosts"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => dispatch(updateNewPostText(text)),
        addPost: () => dispatch(addPost())
    }
}*/

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts)

export default MyPostsContainer
