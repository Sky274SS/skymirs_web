import {connect} from "react-redux";
import Users from "./Users";
import {onChangeFollowCreator} from "../../redux/usersReduser";

const mapStateToProps = (state)=>{
    return {
        state:state.users

    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onChangeFollow: (id,state)=> dispatch (onChangeFollowCreator(id,state))
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer