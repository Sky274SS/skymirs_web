import React from 'react';
import styles from "./profileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://img2.goodfon.ru/original/3200x1200/2/f2/mlechnyy-put-noch-zvezdy-4613.jpg"
                    alt="bg_img"
                    className={styles.contentImg}/>
            </div>
            <div className={styles.profileInfo}>
                <img src="https://coolsen.ru/wp-content/uploads/2021/06/186-2.jpg"
                     alt="ava"
                     className={styles.contentAva}/>
                <div>
                    <div>name</div>
                    <div>description</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;