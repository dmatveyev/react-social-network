import styles from "../../component/users/User.module.css";
import React from "react";

let Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={() => {
                    props.onPageChanged(p)
                }}>
                        {p}
                    </span>
            })}
        </div>
    )
};

export default Pagination;