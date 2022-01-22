const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'

const time = new Date()
const currentTime =()=>{
    let date, month, year
    if(time.getDate()<=9){date=`0${time.getDate()}`} else {date=time.getDate()}
    if(time.getMonth()+1<=9){month=`0${time.getMonth()+1}`} else {month=time.getMonth()+1}
    if(time.getFullYear()%100<=9){year=`0${time.getFullYear()%100}`} else {year=time.getFullYear()%100}
    return `${date}.${month}.${year}`
}
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
        {postText: 'Initial state reducer', likeCount: 1743,time:'21.01.22'},
        {postText: 'Five day without stop!!!, You may liked my posts', likeCount: 2481,time:'22.01.22'}
    ],
    newPost: ''
}

const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            state.postData.push({postText: state.newPost, likeCount: 0,time:currentTime()})
            state.newPost = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPost = action.postText
            return state
        case ADD_LIKE:
            state.postData[action.id].likeCount++
            return state
        default:
            return state
    }
}

export default profileReducer

export const addPostCreater = () => ({type: ADD_POST})
export const updateNewPostTextCreater = post => ({type: UPDATE_NEW_POST_TEXT, postText: post})
export const addLikeCreator = (id) => ({type:ADD_LIKE,id:id})