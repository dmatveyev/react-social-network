import React from "react";
import ProfileContent from "./ProfileContent";
import {connect} from "react-redux";
import {getProfile} from "../../redux/content-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../common/redirect/withAuthRedirect";
import {compose} from "redux";

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
    profile: state.content.profile,
});

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)