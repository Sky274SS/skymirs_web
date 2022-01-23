const SHOW_MORE = 'SHOW-MORE'
const ON_CHANGE_FOLLOW = 'ON-CHANGE-FOLLOW'

const initialState = [
    {
        name: 'Sergey S',
        location: 'Russia,Balashov',
        info: 'I am God in this web!!!',
        img: 'https://coolsen.ru/wp-content/uploads/2021/06/186-2.jpg',
        isFollow: true
    },
    {
        name: 'Alex',
        location: 'Russia,Moscow',
        info: 'Hello!!! How are you?',
        img: 'https://a.d-cd.net/1a424f2s-960.jpg',
        isFollow: true
    },
    {
        name: 'Jack',
        location: 'USA,California',
        info: 'I live in California!!!',
        img: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
        isFollow: true
    },
    {
        name: 'Helen',
        location: 'Russia,Balashov',
        info: 'Get start!!!',
        img: 'https://weblinks.ru/wp-content/uploads/2021/02/2727271934.jpg',
        isFollow: true
    },
    {
        name: 'Bob',
        location: 'USA,New York',
        info: 'FrontEnd developer, it is cool!!!',
        img: 'https://vraki.net/sites/default/files/inline/images/3_370.jpg',
        isFollow: false
    },
    {
        name: 'Kevin',
        location: 'German,Berlin',
        info: 'I like ride a car!!!',
        img: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg',
        isFollow: true
    },
    {
        name: 'Linda',
        location: 'Russia,Omsk',
        info: 'Winter is my favorite season!!!',
        img: 'https://bipbap.ru/wp-content/uploads/2021/07/1525256972_15.jpg',
        isFollow: false
    }

]
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE_FOLLOW:
            let stateCopy = [...state]
            stateCopy[action.id].isFollow =!action.state
            return stateCopy
        default:
            return state
    }

}
export default usersReducer

export const onChangeFollowCreator =(id,state)=>({type: ON_CHANGE_FOLLOW,id:id,state:state})