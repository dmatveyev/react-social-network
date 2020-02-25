import React from "react";
import styles from "./User.module.css"

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: "1",
                    fullName: "Dmitry",
                    status: "BigBoss",
                    followed: true,
                    location: {city: "Moscow", country: "Russia"},
                    description: "The coolest developer!!!!",
                    ava: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
                },
                {
                    id: "2",
                    fullName: "Helga",
                    status: "Teacher",
                    followed: false,
                    location: {city: "Samara", country: "Russia"},
                    description: "The coolest developer!!!!",
                    ava: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
                }
            ]
        );
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.ava} src={u.ava}/>
                        </div>
                    <div> {
                        u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={
                                () => {
                                    props.followw(u.id)
                                }
                            }>Follow</button>
                    }
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
};

export default Users;