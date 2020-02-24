import React from "react";
import styles from "./ProfileInfo.module.css"
import {connect} from "react-redux";

let Info = (props) => {
    let iDesc = props.infoDesc;
    return (
        <div>
            <div>
                <img alt="" src={iDesc.headerTheme}/>
            </div>
            <div className={styles.description}>
                {iDesc.description}
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