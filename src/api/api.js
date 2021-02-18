import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1b2fb99e-9917-4094-9ed1-7028e99917b5"
    }
    
})

export const userAPI = {
   
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfolowUser(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    followUser(userId){
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
}



