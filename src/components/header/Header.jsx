import React from 'react';
import styles from './header.module.css'

const Header = () => {
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

            </header>
    );
};

export default Header;