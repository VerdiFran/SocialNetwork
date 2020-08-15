import profileReducer, {addPost} from './reducers/profileReducer'

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

it('new post should be added', () => {
    let newState = profileReducer(initialState, addPost('new post textttt'))

    expect(newState.posts[5].text).toBe('new post textttt')
})
