import React from 'react';
import style from './header.module.css'

const Header = () => {
    return (
            <header className={style.header}>
                <div className={style.logo_img}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Tu-sofia-logo.svg/1200px-Tu-sofia-logo.svg.png"
                        alt="logo"
                        />
                </div>
                <div className={style.logo_name}>
                    skymirs web
                </div>

            </header>
    );
};

export default Header;