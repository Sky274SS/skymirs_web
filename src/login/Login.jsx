import React, {useState} from 'react';
import styles from './login.module.css'
import * as axios from "axios";

const Login = (props) => {

    const updateEmail = (e)=>{
        let newEmail = e.target.value
        props.updateEmail(newEmail)
    }
    const updatePassword = (e)=>{
        let newPassword = e.target.value
        props.updatePassword(newPassword)
    }

    const onRegister = () => {
        axios.post('/api/auth/register', {email:props.state.currentEmail, password:props.state.currentPassword})
            .then(response => {
                console.log(response)
                props.updateInfoMessage('Вы успешно зарегистрированы')
            })
            .catch(error => {
                props.updateInfoMessage('Неверные данные для регистрации, повторите попытку')
            });
    }

    const onLogin = () => {
        axios.post('/api/auth/login', {email:props.state.currentEmail, password:props.state.currentPassword})
            .then(response => {
                console.log(response)
                props.setLogin(true)
                props.updateInfoMessage('Введите логи и пароль!')
            })
            .catch((e) => {
                props.updateInfoMessage('Неверные данные для авторизации, повторите попытку')
            });
    }

    return (
        <div className={styles.container}>
            <div className={styles.login}>
            <div className={styles.title}>SKYMIRS WEB</div>
            <div className={styles.response}>
                {props.state.infoMessage}
            </div>
            <div className={styles.inputContainer}>
                <input placeholder='Введите логин' className={styles.input} type="text" onChange={updateEmail}/>
                <input placeholder='Введите пароль' className={styles.input} type="password" onChange={updatePassword}/>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={onLogin}>Войти</button>
                <button className={styles.button} onClick={onRegister}>Зарегистрироваться</button>
            </div>


            </div>
        </div>
    );
};

export default Login;