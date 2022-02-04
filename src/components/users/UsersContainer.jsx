import {connect} from "react-redux";
import Users from "./Users";
import {
    changeCurrentPage,
    getUsers,
    onChangeFollow
} from "../../redux/usersReduser";
import React from "react";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
       this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    changeCurrentPage = (id) => {
        this.props.getUsers(id,this.props.pageSize)
    }

    render() {
        return (
            <>
                <Users
                    currentPage={this.props.currentPage}
                    changeCurrentPage={this.changeCurrentPage}
                    state={this.props.state}
                    onChangeFollow={this.props.onChangeFollow}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}/>
                {this.props.isFetching ? <Preloader/> : null}
            </>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        state: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,

    }
}

export default connect(mapStateToProps,
    {onChangeFollow, changeCurrentPage, getUsers })
(UsersContainer)

