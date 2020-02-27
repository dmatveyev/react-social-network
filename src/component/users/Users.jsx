import React from "react";
import styles from "./User.module.css"
import * as axios from "axios";

class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios
                .get("http://localhost:8080/users")
                .then(response => {
                    this.props.setUsers(response.data)
                });
        }
    };

    render() {
        return (<div>
                <button onClick={this.getUsers}>Get Users</button>
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