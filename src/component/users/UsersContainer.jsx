import {connect} from "react-redux";
import {
    changedUsersPage,
    follow,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unFollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../preloader/Preloader";
import Pagination from "../../common/pagging/Pagination";
import {UserApi} from "../../dal/api";

class UsersContainer extends React.Component {

    getUsersPage = (page = this.props.currentPage) => {
        UserApi.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.count)
            });
    };

    onPageChanged = (page) => {
        this.props.setToggleIsFetching(true);
        this.props.changedUsersPage(page);
        this.getUsersPage(page);
    };

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        this.getUsersPage()
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
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

};

export default connect(mapStateToProps,
    {follow, unFollow, setUsers, changedUsersPage, setTotalUsersCount, setToggleIsFetching, toggleFollowingProgress}
)(UsersContainer);