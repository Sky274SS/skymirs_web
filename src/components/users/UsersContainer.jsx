import {connect} from "react-redux";
import Users from "./Users";
import {
    changeCurrentPage, changeCurrentUser,
    getTotalCount,
    onChangeFollow,
    setUsers, toggleIsFetching
} from "../../redux/usersReduser";
import React from "react";
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`/api/profile/all?page=${this.props.currentPage}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.profile)
                this.props.getTotalCount(response.data.count)
            })
    }

    changeCurrentPage = (id) => {
        this.props.changeCurrentPage(id)
        this.props.toggleIsFetching(true)
        axios.get(`/api/profile/all?page=${id}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.profile)

            })
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
    {onChangeFollow, setUsers, changeCurrentPage, getTotalCount, toggleIsFetching})
(UsersContainer)

