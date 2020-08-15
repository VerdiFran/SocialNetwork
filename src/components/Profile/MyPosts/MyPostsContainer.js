import React from 'react'
import {addPost, updateNewPostText} from "../../../redux/reducers/profileReducer"
import MyPosts from "./MyPosts"
import {connect} from "react-redux"

const mapStateToProps = (state) => ({
    posts: state.profilePage.posts
})

/*const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => dispatch(updateNewPostText(text)),
        addPost: () => dispatch(addPost())
    }
}*/

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer
