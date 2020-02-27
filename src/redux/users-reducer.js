const ADD_NEW_USER = 'ADD_NEW_USER';
const UPDATE_USER_INFO = 'ADD_NEW_USER';
const LOAD_NEW_USERS = 'LOAD_NEW_USERS';
const CHANGE_FOLLOW = 'CHANGE_FOLLOW';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []

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
                users: [
                    ...state.users,
                    ...action.users]
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
