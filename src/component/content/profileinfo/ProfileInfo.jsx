import React from "react";
import styles from "./ProfileInfo.module.css"


const ProfileInfo = (props) => {

    let infoDesc = props.infoDesc;

    return (
        <div>
            <div>
                <img alt="" src={infoDesc.headerTheme}/>
            </div>
            <div className={styles.description}>
                {infoDesc.description}
            </div>
        </div>
    )
};

export default ProfileInfo