const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'
const GET_PROFILE = 'GET-PROFILE'
const TOGGLE_IS_FETCHING_PROFILE = 'TOGGLE-IS-FETCHING-PROFILE'


const time = new Date()
const currentTime = () => {
    let date, month, year
    if (time.getDate() <= 9) {
        date = `0${time.getDate()}`
    } else {
        date = time.getDate()
    }
    if (time.getMonth() + 1 <= 9) {
        month = `0${time.getMonth() + 1}`
    } else {
        month = time.getMonth() + 1
    }
    if (time.getFullYear() % 100 <= 9) {
        year = `0${time.getFullYear() % 100}`
    } else {
        year = time.getFullYear() % 100
    }
    return `${date}.${month}.${year}`
}
let initialState = {

    postData: [
        {postText: 'Hello, I am using React-js', likeCount: 194, time: '18.01.22'},
        {postText: 'Second day learn React-js', likeCount: 47, time: '19.01.22'},
        {postText: 'I want become FrontEnd developer', likeCount: 6354, time: '20.01.22'},
        {postText: 'Initial state reducer', likeCount: 143, time: '21.01.22'},
        {postText: 'Five day without stop!!!, You may liked my posts', likeCount: 481, time: '22.01.22'},
        {postText: 'Add users, you may follow me!!! Many BLL change', likeCount: 754, time: '23.01.22'},
        {postText: 'Rest api isActive) Self BackEnd and self DataBase', likeCount: 2745, time: '24.01.22'},
        {postText: 'Preloader is work!!! New container components', likeCount: 572, time: '25.01.22'},
        {postText: 'Opening users profile!!!', likeCount: 1572, time: '26.01.22'}
    ],
    profile:null,
    newPost: '',
    isFetchingProfile: false,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {postText: state.newPost, likeCount: 0, time: currentTime()}],
                newPost: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPost: action.postText
            }
        case ADD_LIKE: {
            let stateCopy = {...state, postData: [...state.postData]}
            stateCopy.postData[action.id].likeCount++
            return stateCopy
        }
        case GET_PROFILE:
            return {
            ...state, profile:action.profile
            }
        case TOGGLE_IS_FETCHING_PROFILE:
            return {
                ...state, isFetchingProfile: action.isFetchingProfile
            }
        default:
            return state
    }
}

export default profileReducer

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = post => ({type: UPDATE_NEW_POST_TEXT, postText: post})
export const addLike = id => ({type: ADD_LIKE, id: id})
export const getProfile = profile => ({type:GET_PROFILE,profile})
export const toggleIsFetchingProfile = isFetchingProfile => ({type: TOGGLE_IS_FETCHING_PROFILE, isFetchingProfile})