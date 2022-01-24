import {connect} from "react-redux";
import Users from "./Users";
import {
    changeCurrentPageCreator,
    getTotalCountCreator,
    onChangeFollowCreator,
    setUsersCreator
} from "../../redux/usersReduser";

const mapStateToProps = (state) => {
    return {
        state: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFollow: (id, state) => dispatch(onChangeFollowCreator(id, state)),
        setUsers: users => dispatch(setUsersCreator(users)),
        changeCurrentPage: currentPage => dispatch(changeCurrentPageCreator(currentPage)),
        getTotalCount: totalCount => dispatch(getTotalCountCreator(totalCount))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer