import {UserApi} from "../dal/api";

const ADD_NEW_USER = 'ADD_NEW_USER';
const UPDATE_USER_INFO = 'ADD_NEW_USER';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CHANGED_USER_PAGE = 'CHANGED_USER_PAGE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_USER:
            break;
        case UPDATE_USER_INFO:
            break;
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            };
        }
        case CHANGED_USER_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        }
        default:
            return state;
    }
};


export default usersReducer;

export const getUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setToggleIsFetching(true));
        UserApi.getUsers(page, pageSize)
            .then(data => {
                dispatch(setToggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.count));
            });
    };
};

export const followUser = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        UserApi.followUser(userId)
            .then(response => {
                if (response.status === 200) {
                    dispatch(follow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
};

export const unFollowUser = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        UserApi.unFollowUser(userId)
            .then(response => {
                if (response.status === 200) {
                    dispatch(unFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
};

export const follow = (userId) =>
    ({
        type: FOLLOW,
        userId: userId
    });
export const changedUsersPage = (p) =>
    ({
        type: CHANGED_USER_PAGE,
        currentPage: p
    });
export const unFollow = (userId) => ({
    type: UNFOLLOW,
    userId: userId
});

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
};
export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalCount
    }
};
export const setToggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
};

export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        userId,
        isFetching
    }
};