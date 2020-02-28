import {connect} from "react-redux";
import Users from "./Users";
import {changedUsersPageAC, followAC, setTotalUsersCountAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        followw: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        changeUp: (page) => {
            dispatch(changedUsersPageAC(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;