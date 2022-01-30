import React, {useState} from 'react';
import styles from './register.module.css'
import * as axios from 'axios'

const Register = (props) => {

    const [registerSchema, setRegisterSchema] = useState({
        email: '',
        password: '',
        firstName: 'test',
        secondName: 'test',
        birthday: 'test',
        city: 'test',
        workPlace: 'test',
        img: 'test',
        bgImg: 'test',
        status: 'test',
        contacts: {
            inst: 'test',
            mail: 'test',
            number: 'test'
        }

    })
    let email, password, firstName = 'test', secondName = 'test', birthday = 'test', city = 'test',
        workPlace = 'test', img = 'test', bgImg = 'test', status = 'test', inst = 'test', mail = 'test', number = 'test'
    return (
        <div className={styles.modal}>
            <div className={styles.modalBody}>
                <div className={styles.modalBodyTitle}>Заполните поля необходимые для регистрации</div>
                <form className={styles.formContainer}>
                    <label>Введите email <input required type="text" onChange={e => email = e.target.value}/></label>

                    <label>Введите password <input required type="password" onChange={e => password = e.target.value}/></label>

                    <label>Введите имя <input required type="text" onChange={e => firstName = e.target.value}/></label>

                    <label>Введите фамилию <input required type="text"
                                                  onChange={e => secondName = e.target.value}/></label>

                    <label>Введите дату рождения <input required type="date" onChange={e => birthday = e.target.value}/></label>

                    <label>Введите город проживания <input required type="text" onChange={e => city = e.target.value}/></label>

                    <label>Введите место работы <input required type="text" onChange={e => workPlace = e.target.value}/></label>

                    <label>Введите ссылку на аватарку<input required type="text" onChange={e => img = e.target.value}/></label>

                    <label>Введите ссылку на фоновое изображение <input required type="text"
                                                                        onChange={e => bgImg = e.target.value}/></label>

                    <label>Введите статус <textarea onChange={e => status = e.target.value}/></label>

                    {/*<div className={styles.contact}>*/}
                    {/*    <label>Введите инстаграм <input required type="text"*/}
                    {/*                                    onChange={e => inst = e.target.value}/></label>*/}

                    {/*    <label>Введите электронную почту <input required type="email"*/}
                    {/*                                            onChange={e => mail = e.target.value}/></label>*/}

                    {/*    <label>Введите номер телефона <input required type="text"*/}
                    {/*                                         onChange={e => number = e.target.value}/></label>*/}

                    {/*</div>*/}
                    <button className={styles.button} onClick={() => {
                        let newRegisterSchema = {
                            firstName: firstName, email, password,
                            secondName, birthday, city,
                            workPlace, img, bgImg, status,
                            contacts: {
                                inst,
                                mail,
                                number
                            }
                        }
                        console.log(newRegisterSchema)
                        axios.post('/api/auth/register', {
                            email: email, password: password, firstName: firstName,
                            secondName: secondName, birthday: birthday, city: city, workPlace: workPlace, img: img,
                            bgImg: bgImg, status: status
                        }).then(response => {
                            console.log(response)
                        }).catch(error => {
                            console.log(error)
                        })
                    }}>Зарегистрироваться
                    </button>
                </form>
                <button className={styles.button} onClick={() => {
                    props.onRegister(props.isRegister)
                }}>exit
                </button>
            </div>

        </div>
    );
};

export default Register;