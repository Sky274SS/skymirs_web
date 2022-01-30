import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setLogin} from "../../redux/authReducer";


class HeaderContainer extends React.Component{

    render() {
        return(
            <Header logout={this.props.logout}/>
        )
    }
}
const mapStateToProps= (state) =>{
    return{
        isAuth:state.auth.isAuth
    }
}

export default connect (mapStateToProps,{setLogin,logout})(HeaderContainer)