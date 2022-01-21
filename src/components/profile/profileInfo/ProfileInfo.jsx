import React from 'react';
import styles from "./profileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://i08.fotocdn.net/s111/b4d4df3604976f85/public_pin_l/2490591478.jpg"
                    alt="bg_img"
                    className={styles.contentImg}/>
            </div>
            <div className={styles.profileInfo}>
                <img src="https://coolsen.ru/wp-content/uploads/2021/06/186-2.jpg"
                     alt="ava"
                     className={styles.contentAva}/>
                <div className={styles.infoContainer}>
                    <div className={styles.name}>{props.profileInfo.name}</div>
                    <div className={styles.info}>
                        <div>{props.profileInfo.year}</div>
                        <div>{props.profileInfo.work}</div>
                    </div>
                </div>
                <div className={styles.description}>
                    {props.profileInfo.info}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;