import React from "react";
import styles from "./ProfileInfo.module.css"


const ProfileInfo = () => {

    let infoDesc = {
      headerTheme: "https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg",
      description: "The coolest developer!!!!"
    };

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