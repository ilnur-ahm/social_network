import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: {
                "API-KEY": "5af616a0-36dd-4388-8deb-952ebeaeb2f1"
            }
});

export const usersAPI = {
    getUsers (currentPage = 1 , pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {return response.data});
            },
    follow(userID) {
        return instance.post(`follow/${userID}`)
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`)
    },
    getProfile(userId) {
        console.warn('use profileApi object')
       return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
       return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    me() {
       return instance.get(`auth/me`,)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
     },
     logout(email, password, rememberMe = false) {
        return instance.delete(`auth/login`)
     }
}