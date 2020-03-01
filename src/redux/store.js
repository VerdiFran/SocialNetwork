import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"


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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store
