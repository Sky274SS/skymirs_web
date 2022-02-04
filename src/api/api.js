import * as axios from "axios";

const data = JSON.parse(localStorage.getItem('userData'))

const instance = axios.create({
    baseURL: '/api/',
    headers: {"Authorization": `Bearer ${data?data.token:''}`}
})

export const usersAPI = {
    getUsers(currentPage=1,pageSize=10){
        return instance.get(`profile/all?page=${currentPage}&limit=${pageSize}`)
            .then(response=>{
                return response.data
            })
    }
}
export const ProfileAPI = {
    getPosts(){
        return instance.get('posts/me')
            .then(response=>{
                return response.data
            })
    },
    getProfile(){
        return instance.get('profile/me')
            .then(response=>{
                return response.data
            })
    },
    addPost(postText){
        return instance.post('posts/', {postText})
            .then (res=>{
         return res
        })
            .catch((error)=>{console.log(error)})
    }
}
