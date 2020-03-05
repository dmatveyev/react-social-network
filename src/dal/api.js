import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'http://localhost:8080/',
        headers: {
            "API-KEY": 22
        }
    }
);

export const UserApi = {
    getUsers (page = 1, pageSize = 10) {
        return instance
            .get(`users?page=${page}&count=${pageSize}`).then(response => response.data)

    },
    getUserProfile (userId) {
        return instance
            .get(`profile/${userId}`)
    },

    unFollowUser (userId) {
        return instance
            .delete(`follow/${userId}`)
    },
    followUser (userId) {
        return instance
            .post(`follow/${userId}`, {})
    }
};

export const AuthApi = {
    authMe () {
        return instance.get(`auth/me`);
    }
};

