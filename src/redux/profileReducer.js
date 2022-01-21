const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    profileInfo: {
        name: 'Сергей Скаймирс',
        year: '22 года',
        work: 'FrontEnd разработчик',
        info: 'На сегоднящний день FrontEnd разработка является одной из самых востребованных профессий в айти сфере. Фронтенд-разработчиками называют программистов, которые отвечают за создание такой внешней стороны (англ. front end) веб-сайтов. Это клиентская часть сайта, с которой пользователь непосредственно взаимодействует на своем компьютере или телефоне (клиенте).'
    },
    postData: [
        {postText: 'Hello, I am using React-js', likeCount: 10,time:'18.01.22'},
        {postText: 'Second day learn React-js', likeCount: 15,time:'19.01.22'},
        {postText: 'I want become FrontEnd developer', likeCount: 345,time:'20.01.22'},
        {postText: 'initial state reducer', likeCount: 1743,time:'21.01.22'}
    ],
    newPost: ''
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            state.postData.push({postText: state.newPost, likeCount: 0})
            state.newPost = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPost = action.postText
            return state
        default:
            return state
    }
}

export default profileReducer

export const addPostCreater = () => ({type: ADD_POST})
export const updateNewPostTextCreater = post => ({type: UPDATE_NEW_POST_TEXT, postText: post})