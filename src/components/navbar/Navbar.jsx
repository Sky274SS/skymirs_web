import React from 'react';
import styles from './navbar.module.css'
import {NavLink} from "react-router-dom";
import NavFriends from "./friends/navFriends";

const Navbar = (props) => {
    const linkActive = () => {
        return link => link.isActive ? styles.activeLink : styles.link
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="profile" className={linkActive()}>
                    Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="dialogs" className={linkActive()}>
                    Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="news" className={linkActive()}>
                    News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="music" className={linkActive()}>
                    Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="settings" className={linkActive()}>
                    Settings</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="friends" className={linkActive()}>
                    <NavFriends friends={props.config}/>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;