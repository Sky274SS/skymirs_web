import React from 'react';
import styles from './preloader.module.css'

const Preloader = () => {
    return (
        <div className={styles.container}>
            <img src="/preloader.svg" alt="preloader" />
        </div>
    );
};

export default Preloader;