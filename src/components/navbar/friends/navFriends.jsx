import React from 'react';
import styles from './navFriends.module.css'

const NavFriends = (props) => {
    return (
        <div >
            <div>Friends</div>
            <div className={styles.friends}>
            {/*{props.friends.map((element,id)=>{*/}
            {/*    return(*/}
            {/*        <div className={styles.container} key={id}>*/}
            {/*            <img src={element.img} alt="friend_ava" className={styles.img}/>*/}
            {/*            <div>{element.name}</div>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
            </div>
        </div>
    );
};

export default NavFriends;