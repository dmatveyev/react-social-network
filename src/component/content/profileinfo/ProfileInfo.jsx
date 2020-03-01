import React from "react";
import styles from "./ProfileInfo.module.css"
import {connect} from "react-redux";
import Preloader from "../../preloader/Preloader";

let Info = (props) => {
    let iDesc = props.infoDesc;
    let profile = props.profile;
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img alt="" src={iDesc.headerTheme}/>
                {iDesc.description}
            </div>
            <div className={styles.description}>
                <img alt="" className={styles.ava} src= {profile.ava} />
                {profile.id}
            </div>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        infoDesc: state.content.infoDesc
    };
}

function mapDispatchToProps() {
    return {};
}

let ProfileInfo = connect(mapStateToProps, mapDispatchToProps)(Info);

export default ProfileInfo