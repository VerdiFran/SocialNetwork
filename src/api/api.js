import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : '9a818970-b58c-4bf2-9d67-b5d1ac597540'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, { status })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(login, password, rememberMe = false) {
        return instance.post('auth/login', {email: login, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}
