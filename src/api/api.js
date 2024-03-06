import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: {
                "API-KEY": "5af616a0-36dd-4388-8deb-952ebeaeb2f1"
            }
});

export const usersAPI = {
    getUsers (currentPage = 10 , pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {return response.data})
            }
}

/* export const getUsers = (currentPage = 10 , pageSize = 10) => {
return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {return response.data})
    } */
