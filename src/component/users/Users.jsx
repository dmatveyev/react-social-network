import React from "react";
import styles from "./User.module.css"
import {NavLink} from "react-router-dom";
import {UserApi} from "../../dal/api";

let Users = (props) => {

    return (
        <div>

            {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/'+ u.id}>
                                <img alt="" className={styles.ava} src={u.ava}/>
                            </NavLink>
                        </div>
                    <div> {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            UserApi.unFollowUser(u.id)
                                .then(response => {
                                    if (response.status === 200) {
                                        props.unFollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });

                        }

                        }>UnFollow</button>
                        : <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            UserApi.followUser(u.id)
                                .then(response => {
                                    if (response.status === 200) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                });
                            }

                        }>Follow</button>}
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
};

export default Users;