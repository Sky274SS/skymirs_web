const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Alex', img: 'https://a.d-cd.net/1a424f2s-960.jpg'},
        {id: 2, name: 'Jack', img: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
        {id: 3, name: 'Helen', img: 'https://weblinks.ru/wp-content/uploads/2021/02/2727271934.jpg'},
        {id: 4, name: 'Bob', img: 'https://vraki.net/sites/default/files/inline/images/3_370.jpg'},
        {id: 5, name: 'Kevin', img: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg'},
        {id: 6, name: 'Linda', img: 'https://bipbap.ru/wp-content/uploads/2021/07/1525256972_15.jpg'},
    ],
    messageData: [
        {message: 'Hi!', isFriend: true},
        {message: 'How are you?', isFriend: true},
        {message: 'Yo!', isFriend: false},
        {message: 'I am fine', isFriend: false},
        {message: 'And you?', isFriend: false},
        {message: 'Good, thank you', isFriend: true},
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ea error eveniet explicabo, non obcaecati soluta voluptate. Aliquam deleniti, dolore illo incidunt maxime molestiae odit perferendis quia saepe, ullam voluptatem.',
            isFriend: true
        }
    ],
    newMessage: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, {message: state.newMessage, isFriend: false}],
                newMessage: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newMessage
            }
        default:
            return state
    }
}

export default dialogsReducer

export const addMessageCreater = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreater = message => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message})