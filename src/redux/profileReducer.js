
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        {id: 1, text: 'Hi! How are you?', likesCount: 3},
        {id: 2, text: 'It\'s my first post', likesCount: 18},
        {id: 3, text: 'Hi! How are you?', likesCount: 3},
        {id: 4, text: 'It\'s my first post', likesCount: 18},
        {id: 5, text: 'Hi! How are you?', likesCount: 3}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        case UPDATE_NEW_POST_TEXT:
            return state.newPostText !== '' ? {
                ...state,
                posts: [...state.posts, {id: Math.random() * 10000, text: state.newPostText, likesCount: 0}],
                newPostText: ''
            } : state
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer
