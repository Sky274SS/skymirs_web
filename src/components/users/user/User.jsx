import React from 'react';
import styles from './user.module.css'

const User = (props) => {

    const onChangeFollow =()=>{
        props.onChangeFollow(props.id,props.isFollow)
    }
    return (
        <div className={styles.container}>
            <div className={styles.avaContainer}>
                <div>
                    <img
                        src={props.img}
                        alt="ava"
                        className={styles.img}/>
                </div>
                <div>
                    <button className={styles.button} onClick={onChangeFollow}>
                        {props.isFollow?'unFollow':'Follow'}
                    </button>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div>
                    <div>{props.name}</div>
                    <div>{props.location}</div>
                </div>
                <div>{props.info}</div>
            </div>
        </div>
    );
};

export default User;