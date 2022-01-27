const UPDATE_EMAIL = 'UPDATE-EMAIL'
const UPDATE_PASSWORD = 'UPDATE-PASSWORD'
const SET_LOGIN = 'SET-LOGIN'
const UPDATE_INFO_MESSAGE = 'UPDATE-INFO-MESSAGE'

let initialState = {
    isAuth: false,
    infoMessage: 'Введите логи и пароль!',
    currentEmail: '',
    currentPassword: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_EMAIL:
            return {
                ...state,
                currentEmail: action.currentEmail
            }
        case UPDATE_PASSWORD:
            return {
                ...state,
                currentPassword: action.currentPassword
            }
        case UPDATE_INFO_MESSAGE:
            return {
                ...state,
                infoMessage: action.infoMessage
            }
        case SET_LOGIN:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const updateEmail = currentEmail => ({type: UPDATE_EMAIL, currentEmail})
export const updatePassword = currentPassword => ({type: UPDATE_PASSWORD, currentPassword})
export const updateInfoMessage = infoMessage => ({type: UPDATE_INFO_MESSAGE, infoMessage})
export const setLogin = isAuth => ({type: SET_LOGIN, isAuth})

export default authReducer