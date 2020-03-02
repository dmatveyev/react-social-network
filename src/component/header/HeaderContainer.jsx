import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {UserApi} from "../../dal/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        UserApi.authMe()
            .then(response => {
                if (response.status === 200) {
                    let {id, fullName, status, ava} = response.data;
                    this.props.setAuthUserData(id,
                        fullName,
                        status, ava)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    fullName: state.auth.fullName,
    ava: state.auth.ava
});


export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)