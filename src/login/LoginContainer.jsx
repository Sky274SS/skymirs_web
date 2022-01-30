import React from "react";
import * as axios from "axios";
import Login from "./Login";
import {connect} from "react-redux";
import {setLogin, setToken, setUserId, updateEmail, updateInfoMessage, updatePassword} from "../redux/authReducer";

class LoginContainer extends React.Component {


    render() {
        return <Login
            updateInfoMessage={this.props.updateInfoMessage}
            updateEmail={this.props.updateEmail}
            updatePassword={this.props.updatePassword}
            state={this.props.state}
            setLogin={this.props.setLogin}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.auth
    }

}

export default connect(mapStateToProps,
    {updateEmail, updatePassword, updateInfoMessage, setLogin})(LoginContainer)