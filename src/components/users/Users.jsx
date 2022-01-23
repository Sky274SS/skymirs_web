import React from 'react';
import User from "./user/User";
import styles from './users.module.css'

const Users = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>USERS</div>
            <div>

                {props.state.map((user,id)=>{
                  return (
                      <User
                        name={user.name}
                        location={user.location}
                        info={user.info}
                        img={user.img}
                        isFollow={user.isFollow}
                        onChangeFollow={props.onChangeFollow}
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
};

export default Users;