import React from "react";
import styles from "./User.module.css"

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage} onClick={() => {
                        props.onPageChanged(p)
                    }}>
                        {p}
                    </span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img alt="" className={styles.ava} src={u.ava}/>
                        </div>
                    <div> {u.followed ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.followw(u.id)
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