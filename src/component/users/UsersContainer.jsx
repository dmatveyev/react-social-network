import {connect} from "react-redux";
import {changedUsersPage, followUser, getUsers, toggleFollowingProgress, unFollowUser} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../preloader/Preloader";
import Pagination from "../../common/pagging/Pagination";
import {withAuthRedirect} from "../../common/redirect/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    onPageChanged = (page) => {
        this.props.changedUsersPage(page);
        this.props.getUsers(page, this.props.pageSize);
    };

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
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
                       followingInProgress={this.props.followingInProgress}
                       followUser={this.props.followUser}
                       unFollowUser={this.props.unFollowUser}
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

export default compose()(
    connect(mapStateToProps,
        {changedUsersPage, toggleFollowingProgress, getUsers, followUser, unFollowUser}),
    withAuthRedirect
)(UsersContainer);