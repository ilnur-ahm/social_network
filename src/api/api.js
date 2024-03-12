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
       return instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    me() {
       return instance.get(`auth/me`,)
    }
}