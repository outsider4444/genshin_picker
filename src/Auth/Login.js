import React, {useState} from 'react';
import styles from './Login.module.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/Register`;
        navigate(path);
    }

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', formData);
            localStorage.setItem('AccessToken', response.data.token)
            navigate("/")
        } catch (error) {
            console.error('Error authenticating user:', error.response);
        }
    };

    return (
        <div className={styles.container} onSubmit={onSubmit}>
            <div className={styles.loginContainer}>
                <div className={styles.loginImage}>
                </div>
                <div className={styles.loginFormContainer}>
                    <h1 className={styles.title}>Добро пожаловать в Genshin Picker</h1>
                    <form className={styles.loginForm}>
                        <div className={styles.inputContainer}>
                            <input type="email" id="email" name="email" value={email} placeholder={"Email"}
                                   onChange={onChange} className={styles.inputField} required/>
                        </div>
                        <div className={styles.inputContainer}>
                            <input type="password" id="password" name="password" placeholder={"Пароль"}
                                   value={password} onChange={onChange} required className={styles.inputField}/>
                        </div>
                        <button type="submit" className={styles.loginButton}>Войти</button>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <label htmlFor="registerBtn">Нет аккаунта?</label>
                            <button className={styles.registerButton} id={"registerBtn"}
                                    onClick={routeChange}>Регистрация
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
