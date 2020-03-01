import React from "react";
import styles from "./User.module.css"
import {NavLink} from "react-router-dom";

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
                    <div> {u.followed ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
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
};

export default Users;