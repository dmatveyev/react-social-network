import {connect} from "react-redux";
import {
    changedUsersPageAC,
    followAC,
    setToggleIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../preloader/Preloader";
import Pagination from "../../common/pagging/Pagination";

class UsersContainer extends React.Component {

    getUsers = (page = this.props.currentPage) => {
        axios
            .get(`http://localhost:8080/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.count)
            });
    };

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.changeUp(page);
        this.getUsers(page);
    };

    componentDidMount() {
        this.props.toggleIsFetching(true);
        this.getUsers();
    }


    render() {
        return <>
            <Pagination totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}/>
            {this.props.isFetching ?
                <Preloader/>
                :
                <Users users={this.props.users}
                       followw={this.props.followw}
                       unFollow={this.props.unFollow}
                />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetchingAC(isFetching))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);