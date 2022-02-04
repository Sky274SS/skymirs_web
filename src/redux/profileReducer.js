import {ProfileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'
const GET_PROFILE = 'GET-PROFILE'
const GET_ME_POSTS = 'GET-ME-POSTS'
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

    posts: [],
    profile: null,
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
            let stateCopy = {...state, posts: [...state.posts]}
            stateCopy.posts[action.id].likeCount++
            return stateCopy
        }
        case GET_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case GET_ME_POSTS:
            return {
                ...state, posts: action.posts
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
export const getProfile = profile => ({type: GET_PROFILE, profile})
export const getPosts = posts => ({type: GET_ME_POSTS, posts})
export const toggleIsFetchingProfile = isFetchingProfile => ({type: TOGGLE_IS_FETCHING_PROFILE, isFetchingProfile})

export const getProfileInfo = () => {
    return (dispatch) => {
        dispatch(toggleIsFetchingProfile(true))
        ProfileAPI.getProfile()
            .then(data => {
                dispatch(toggleIsFetchingProfile(false))
                dispatch(getProfile(data.profile[0]))
            })
        ProfileAPI.getPosts()
            .then(data => {
                dispatch(getPosts(data.posts))
            })
    }
}
export const addPostThunk = (postText) => {

    return (dispatch) => {
        ProfileAPI.addPost(postText)
            .then(res => {
                ProfileAPI.getPosts()
                    .then(data => {
                        dispatch(getPosts(data.posts))
                    })
            })
    }
}