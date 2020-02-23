import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/1">
                        Den
                    </NavLink>
                </div>
                <div className={styles.dialog}>
                    <div className={styles.dialog}>
                        <NavLink to="/dialogs/2">
                            Hel
                        </NavLink></div>
                </div>
                <div className={styles.dialog}>
                    <div className={styles.dialog}>
                        <NavLink to="/dialogs/3">
                            Helen
                        </NavLink></div>
                </div>
                <div className={styles.dialog}>
                    <div className={styles.dialog}>
                        <NavLink to="/dialogs/4">
                            Helen
                        </NavLink></div>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you</div>
                <div className={styles.message}>WTF</div>
            </div>
        </div>
    )
};

export default Dialogs