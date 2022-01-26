import React from 'react';
import styles from "./profileInfo.module.css";

const ProfileInfo = (props) => {

    return (

        <div>
            <div>
                <img
                    src={props.state.bgImg}
                    alt="bg_img"
                    className={styles.contentImg}/>
            </div>
            <div className={styles.profileInfo}>
                <img src={props.state.img}
                     alt="ava"
                     className={styles.contentAva}/>
                <div className={styles.infoContainer}>
                    <div className={styles.name}>{`${props.state.firstName} ${props.state.secondName}`}</div>
                    <div className={styles.info}>
                        <div>{`Дата рождения: ${props.state.birthday}`}</div>
                        <div>{`Город: ${props.state.city}`}</div>
                        <div>{`Место работы: ${props.state.workPlace}`}</div>
                    </div>
                </div>
                <div className={styles.description}>
                    <div>{`Статус: ${props.state.status}`}</div>
                    <div>Контакты:
                        <div>{`Инстаграм: ${props.state.contacts.inst}`}</div>
                        <div>{`Электронная почта: ${props.state.contacts.mail}`}</div>
                        <div>{`Номер телефона: ${props.state.contacts.number}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;