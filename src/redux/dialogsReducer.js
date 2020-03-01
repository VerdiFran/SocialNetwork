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
    newMessageText : ''
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {...state}

    const updateNewMessageText = (newText) => {
        stateCopy.newMessageText = newText
    }

    const sendMessage = () => {
        stateCopy.messages = [...state.messages]

        let text = stateCopy.newMessageText
        if (text !== '') {
            stateCopy.newMessageText = ""
            stateCopy.messages.push({
                id: Math.random() * 10000,
                text: text,
                sender: 'Mark',
                time: '29.03.20 11:59'
            })
        }
    }

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            updateNewMessageText(action.newText)
            return stateCopy
        case SEND_MESSAGE:
            sendMessage()
            return stateCopy
        default:
            return stateCopy
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default dialogsReducer
