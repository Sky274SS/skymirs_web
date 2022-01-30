import React, {useState} from 'react';
import styles from './login.module.css'
import * as axios from "axios";
import Register from "./registration/Register";

const Login = (props) => {

    const [isRegister,setIsRegister] = useState(false)

    const updateEmail = (e)=>{
        let newEmail = e.target.value
        props.updateEmail(newEmail)
    }
    const updatePassword = (e)=>{
        let newPassword = e.target.value
        props.updatePassword(newPassword)
    }

    const onRegister = (state) => {
        // axios.post('/api/auth/register', {email:props.state.currentEmail, password:props.state.currentPassword,})
        //     .then(response => {
        //         console.log(response)
        //         props.updateInfoMessage('Вы успешно зарегистрированы')
        //     })
        //     .catch(error => {
        //         props.updateInfoMessage('Неверные данные для регистрации, повторите попытку')
        //     });
        setIsRegister(!state)
    }

    const onLogin = () => {
        axios.post('/api/auth/login', {email:props.state.currentEmail, password:props.state.currentPassword})
            .then(response => {
                console.log(response)
                props.setLogin(true)
                localStorage.setItem('userData', JSON.stringify({
                    userId: response.data.userId, token: response.data.token
                }))
                props.updateInfoMessage('Введите логин и пароль')
            })
            .catch((e) => {
                props.updateInfoMessage('Неверные данные для авторизации, повторите попытку')
            });
    }

    return (
        <div className={styles.container}>
            {isRegister&&<Register isRegister={isRegister} onRegister={onRegister}/>}
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
                <button className={styles.button} onClick={()=>{onRegister(isRegister)}}>Зарегистрироваться</button>
            </div>


            </div>
        </div>
    );
};

export default Login;