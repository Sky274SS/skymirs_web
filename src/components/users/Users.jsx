import React from 'react';
import User from "./user/User";
import styles from './users.module.css'

const Users = (props)=>{
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
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
                                className={props.currentPage === page? styles.pagesActive: undefined}
                                key={id}
                                onClick={() => {
                                    props.changeCurrentPage(id + 1)
                                }}>{page}</span>
                        )
                    })}
                </div>
                <div>
                    {props.state.map((user, id) => {
                        return (
                            <User
                                name={`${user.firstName} ${user.secondName}`}
                                location={user.city}
                                info={user.status}
                                img={user.img}
                                isFollow={user.isFollow}
                                onChangeFollow={props.onChangeFollow}
                                id={id}
                                key={id}
                            />
                        )
                    })}

                </div>
                <div>
                    {/*<button className={styles.button}>Show more</button>*/}
                </div>
            </div>
        );

    }



export default Users;