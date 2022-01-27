import React from 'react';
import styles from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo_img}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Tu-sofia-logo.svg/1200px-Tu-sofia-logo.svg.png"
                    alt="logo"
                    className={styles.img}
                />
            </div>
            <div className={styles.logo_name}>
                skymirs web
            </div>
            <div>
                <NavLink className={styles.exit} to={'/'} onClick={()=> {
                    props.setLogin(false)
                }}>Exit</NavLink>

            </div>

        </header>
    );
};

export default Header;