import React from "react";
import Header from "./Header";
import * as axios from 'axios'
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer  extends React.Component {

    componentDidMount() {
        axios.get (`http://localhost:8080/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.status === 200) {
                    let {id, fullName, status, ava} = response.data;
                    debugger;
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