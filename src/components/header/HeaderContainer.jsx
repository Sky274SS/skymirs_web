import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setLogin} from "../../redux/authReducer";


class HeaderContainer extends React.Component{

    render() {
        return(
            <Header setLogin={this.props.setLogin}/>
        )
    }
}
const mapStateToProps= (state) =>{
    return{
        isAuth:state.auth.isAuth
    }
}

export default connect (mapStateToProps,{setLogin})(HeaderContainer)