import React from "react";
import ProfileContent from "./ProfileContent";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/content-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios
            .get(`http://localhost:8080/profile/${userId}`,  {
                withCredentials: true
            })
            .then(response => {
                this.props.setUserProfile(response.data)
            });
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
    setUserProfile
})(WithUrlDataContainerComponent);