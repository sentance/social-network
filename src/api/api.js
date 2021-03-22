import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1b2fb99e-9917-4094-9ed1-7028e99917b5"
    }
    
})

const userAPI = {
   
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfolowUser(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    followUser(userId){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please use profilAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {

    getProfile(userId){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    setStatus(status){
        return instance.put(`profile/status`, {
            status: status
        })
    },
    savePhoto(file){
        var formData = new FormData();
        formData.append('image', file)
        return instance.put(`profile/photo`, formData, {
            'Content-Type': 'multipart/form-data'
        })
    },
    updateProfileInfo(profile){
        
        return instance.put(`profile`, profile)
    }
}

export const authAPI  = {
    me () {
        return instance.get(`auth/me`)
    },
    login(email, password, remmemberMe = false, captcha){
        return instance.post(`auth/login`, {email, password, remmemberMe, captcha}).then(response => response.data)
    },
    logout(email, password, remmemberMe = false){
        return instance.delete(`auth/login`)
    },
    getCaptcha(){
        return instance.get(`/security/get-captcha-url`)
    }
}


export default userAPI
