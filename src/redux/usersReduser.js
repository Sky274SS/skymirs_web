const SHOW_MORE = 'SHOW-MORE'
const ON_CHANGE_FOLLOW = 'ON-CHANGE-FOLLOW'
const SET_USERS = 'SET-USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE'
const GET_TOTAL_COUNT = 'GET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 3,
    totalUsersCount: 0,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE_FOLLOW:
            let stateCopy = {...state}
            stateCopy.users = [...stateCopy.users]
            stateCopy.users[action.id].isFollow = !action.state
            return stateCopy
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case CHANGE_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case GET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        default:
            return state
    }

}
export default usersReducer

export const onChangeFollowCreator = (id, state) => ({type: ON_CHANGE_FOLLOW, id, state})
export const setUsersCreator = users => ({type: SET_USERS, users})
export const changeCurrentPageCreator = currentPage => ({type: CHANGE_CURRENT_PAGE, currentPage})
export const getTotalCountCreator = totalCount => ({type: GET_TOTAL_COUNT, totalCount})
export const toggleIsFetchingCreator = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})