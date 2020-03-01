import {connect} from "react-redux";
import {
    changedUsersPage,
    follow,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../preloader/Preloader";
import Pagination from "../../common/pagging/Pagination";

class UsersContainer extends React.Component {

    getUsers = (page = this.props.currentPage) => {
        axios
            .get(`http://localhost:8080/users?page=${page}&count=${this.props.pageSize}`,  {
                withCredentials: true
            })
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.count)
            });
    };

    onPageChanged = (page) => {
        this.props.setToggleIsFetching(true);
        this.props.changedUsersPage(page);
        this.getUsers(page);
    };

    componentDidMount() {
        this.props.setToggleIsFetching(true);
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
                       follow={this.props.follow}
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

export default connect(mapStateToProps,
    {follow, unFollow, setUsers, changedUsersPage, setTotalUsersCount, setToggleIsFetching}
)(UsersContainer);