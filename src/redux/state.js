
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Hi! How are you?', likesCount: 3},
                {id: 2, text: 'It\'s my first post', likesCount: 18},
                {id: 3, text: 'Hi! How are you?', likesCount: 3},
                {id: 4, text: 'It\'s my first post', likesCount: 18},
                {id: 5, text: 'Hi! How are you?', likesCount: 3}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Anna'},
                {id: 2, name: 'Aleksey'},
                {id: 3, name: 'Vladimir'},
                {id: 4, name: 'Maris'},
                {id: 5, name: 'Mark'},
                {id: 6, name: 'Alena'}
            ],
            messages: [
                {id: 1, text: 'Hi', sender: 'Anna', time: '20.01.20 16:33'},
                {id: 2, text: 'How are you?', sender: 'Mark', time: '20.01.20 16:35'},
                {id: 3, text: '...', sender: 'Anna', time: '20.01.20 18:12'},
                {id: 4, text: 'Hi', sender: 'Anna', time: '20.01.20 16:33'},
                {id: 5, text: 'How are you?', sender: 'Mark', time: '20.01.20 16:35'},
                {id: 6, text: '...', sender: 'Anna', time: '20.01.20 18:12'},
                {id: 7, text: 'Hi', sender: 'Anna', time: '20.01.20 16:33'},
                {id: 8, text: 'How are you?', sender: 'Mark', time: '20.01.20 16:35'},
                {id: 9, text: '...', sender: 'Anna', time: '20.01.20 18:12'},
                {id: 10, text: 'Hi', sender: 'Anna', time: '20.01.20 16:33'}
            ],
            newMessageText : ''
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _addPost() {
        this._state.profilePage.posts.push(
            {
                id: Math.random() * 10000,
                text: this._state.profilePage.newPostText,
                likesCount: 0
            }
        )
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },
    _sendMessage() {
        let text = this._state.dialogsPage.newMessageText
        this._state.dialogsPage.newMessageText = ""
        this._state.dialogsPage.messages.push({
            id: Math.random() * 10000,
            text: text,
            sender: 'Mark',
            time: '29.03.20 11:59'
        })
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newText)
        } else if (action.type === SEND_MESSAGE) {
            this._sendMessage()
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default store
