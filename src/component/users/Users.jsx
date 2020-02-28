import React from "react";
import styles from "./User.module.css"
import * as axios from "axios";

class Users extends React.Component {

    getUsers = (page = this.props.currentPage) => {
        axios
            .get(`http://localhost:8080/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.count)
            });
    };

    onPageChanged = (page) => {
        this.props.changeUp(page);
        this.getUsers(page);
    };

    componentDidMount() {
        this.getUsers();
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <a className={this.props.currentPage === p && styles.selectedPage} onClick={() => {
                            this.onPageChanged(p)
                        }}>
                            {p}
                        </a>
                    })}
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.ava} src={u.ava}/>
                        </div>
                    <div> {u.followed ? <button onClick={() => {
                            this.props.unFollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            this.props.followw(u.id)
                        }}>Follow</button>}
                    </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.id}</div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
                }
            </div>
        )
    }
}

export default Users;