import React from "react";
import ProfileContent from "./ProfileContent";
import {connect} from "react-redux";
import {getProfile} from "../../redux/content-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
    }

    render() {
        return (

            <div>
                <ProfileContent {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.content.profile});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getProfile
})(WithUrlDataContainerComponent);