import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";


const mapStateToProps = (state) =>{
    return {
        profileInfo:state.profile.profileInfo
    }
}

const ProfileInfoContainer = connect (mapStateToProps)(ProfileInfo)

export default ProfileInfoContainer