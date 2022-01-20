import React from 'react';
import styles from "./dialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    const nameActive = () => {
        return name => name.isActive ? styles.nameActive : styles.name
    }

    return (
        <div className={styles.container}>
            <img src={props.img}
                 alt="ava"
            className={styles.img}/>
            <NavLink to={`${props.id}`} className={nameActive()}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;