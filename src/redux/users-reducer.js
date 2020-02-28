const ADD_NEW_USER = 'ADD_NEW_USER';
const UPDATE_USER_INFO = 'ADD_NEW_USER';
const LOAD_NEW_USERS = 'LOAD_NEW_USERS';
const CHANGE_FOLLOW = 'CHANGE_FOLLOW';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CHANGED_USER_PAGE = 'CHANGED_USER_PAGE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_USER:
            break;
        case UPDATE_USER_INFO:
            break;
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
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
        default:
            return state;
    }
};


export default usersReducer;

export const followAC = (userId) =>
    ({
        type: FOLLOW,
        userId: userId
    });
export const changedUsersPageAC = (p) =>
    ({
        type: CHANGED_USER_PAGE,
        currentPage: p
    });
export const unFollowAC = (userId) => ({
    type: UNFOLLOW,
    userId: userId
});

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
};
export const setTotalUsersCountAC = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalCount
    }
};
