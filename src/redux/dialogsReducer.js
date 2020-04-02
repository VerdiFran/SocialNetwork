const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
    messageId: 11
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return updateNewMessageText(action.newText)
        case SEND_MESSAGE:
            return {
                ...state,
                messages: action.newMessageText.length > 0
                    ? [...state.messages, {
                        id: state.messageId,
                        text: action.newMessageText,
                        sender: 'Mark',
                        time: '29.03.20 11:59'
                    }]
                    : [...state.messages],
                messageId: state.messageId + 1
            }
        default:
            return state
    }
}

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer
