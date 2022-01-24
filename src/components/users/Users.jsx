import React from 'react';
import User from "./user/User";
import styles from './users.module.css'
import * as axios from 'axios'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`http://localhost:8000/api/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users)
            this.props.getTotalCount(response.data.count)
        })
    }

    changeCurrentPage = (id) => {
        this.props.changeCurrentPage(id)
        axios.get(`http://localhost:8000/api/users?page=${id}&limit=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.users)

        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={styles.container}>
                <div className={styles.title}>USERS</div>
                <div className={styles.pages}>
                    {pages.map((page, id) => {
                        return (
                            <span
                                className={this.props.currentPage === page? styles.pagesActive: undefined}
                                key={id}
                                onClick={() => {
                                    this.changeCurrentPage(id + 1)
                                }}>{page}</span>
                        )
                    })}
                </div>
                <div>
                    {this.props.state.map((user, id) => {
                        return (
                            <User
                                name={user.name}
                                location={user.location}
                                info={user.info}
                                img={user.img}
                                isFollow={user.isFollow}
                                onChangeFollow={this.props.onChangeFollow}
                                id={id}
                                key={id}/>
                        )
                    })}

                </div>
                <div>
                    <button className={styles.button}>Show more</button>
                </div>
            </div>
        );

    }
}


export default Users;