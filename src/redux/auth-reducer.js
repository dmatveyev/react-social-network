import {AuthApi} from "../dal/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    fullName: null,
    status: null,
    ava: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }
};

export default authReducer;

export const authMe = () => {

    return (dispatch) => {
        AuthApi.authMe()
            .then(response => {
                if (response.status === 200) {
                    let {id, fullName, status, ava} = response.data;
                    dispatch(setAuthUserData(id,
                        fullName,
                        status, ava))
                }
            })
    }
};

export const setAuthUserData = (id, fullName, status, ava) =>
    ({
        type: SET_USER_DATA,
        data: {
            id,
            fullName,
            status,
            ava
        }
    });
