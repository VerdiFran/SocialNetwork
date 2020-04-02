import {profileAPI} from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'

let initialState = {
    posts: [
        {id: 1, text: 'Hi! How are you?', likesCount: 3},
        {id: 2, text: 'It\'s my first post', likesCount: 18},
        {id: 3, text: 'Hi! How are you?', likesCount: 3},
        {id: 4, text: 'It\'s my first post', likesCount: 18},
        {id: 5, text: 'Hi! How are you?', likesCount: 3}
    ],
    postId: 6,
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: action.newPostText.length > 0
                    ? [...state.posts, {
                        id: state.postId,
                        text: action.newPostText,
                        likesCount: 0
                    }]
                    : [...state.posts],
                postId: state.postId + 1
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.statusText
            }
        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProfileStatus = (statusText) => ({type: SET_PROFILE_STATUS, statusText})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => dispatch(setUserProfile(data)))
}

export const getProfileStatus = (userId) => (dispatch) => {
    profileAPI.getProfileStatus(userId).then(response => dispatch(setProfileStatus(response.data)))
}

export const updateProfileStatus = (statusText) => (dispatch) => {
    profileAPI.updateProfileStatus(statusText).then(response => {
        if (response.data.resultCode === 0)
            dispatch(setProfileStatus(statusText))
    })
}

export default profileReducer
