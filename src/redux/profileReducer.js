
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, text: 'Hi! How are you?', likesCount: 3},
        {id: 2, text: 'It\'s my first post', likesCount: 18},
        {id: 3, text: 'Hi! How are you?', likesCount: 3},
        {id: 4, text: 'It\'s my first post', likesCount: 18},
        {id: 5, text: 'Hi! How are you?', likesCount: 3}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    let stateCopy = {...state}

    const addPost = () => {
        stateCopy.posts = [...state.posts]

        let text = stateCopy.newPostText
        if (text !== '') {
            stateCopy.posts.push(
                {
                    id: Math.random() * 10000,
                    text: text,
                    likesCount: 0
                }
            )
            stateCopy.newPostText = ''
        }
    }

    const updateNewPostText = (newText) => {
        stateCopy.newPostText = newText
    }

    switch (action.type) {
        case ADD_POST:
            addPost()
            return stateCopy
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(action.newText)
            return stateCopy
        default:
            return stateCopy
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer
