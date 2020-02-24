import React from "react";
import styles from "./ProfileInfo.module.css"
import StoreContext from "../../../redux/store-context";


const ProfileInfo = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let infoDesc = store.getState().content.infoDesc;
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
            }
        }


        </StoreContext.Consumer>

    )
};

export default ProfileInfo