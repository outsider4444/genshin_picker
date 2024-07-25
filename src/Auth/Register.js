import React, {useState} from 'react';
import styles from "./Login.module.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/Login`;
        navigate(path);
    }

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
            localStorage.setItem('AccessToken', response.data.token)
            alert("Регистрация успешна!")
            navigate("/")
        } catch (error) {
            console.error('Error registering user:', error.response);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <div className={styles.loginImage}>
                </div>
                <div className={styles.loginFormContainer}>
                    <h1 className={styles.title}>Регистрация в Genshin Picker</h1>
                    <form className={styles.registerForm} onSubmit={onSubmit}>
                        <div className={styles.inputContainer}>
                            <input type="text" id="username" name="username" placeholder={"Username"}
                                   value={username} onChange={onChange} className={styles.inputField} required/>
                        </div>
                        <div className={styles.inputContainer}>
                            <input type="email" id="email" name="email" value={email}  placeholder={"Email"}
                                onChange={onChange} className={styles.inputField} required/>
                        </div>
                        <div className={styles.inputContainer}>
                            <input type="password" id="password" name="password"  placeholder={"Пароль"}
                                value={password} onChange={onChange} className={styles.inputField}
                                required/>
                        </div>
                        <button type="submit" className={styles.loginButton}>Зарегистрироваться</button>
                        <div style={{display:"flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                            <label htmlFor="authBtn">Уже есть аккаунт?</label> <br/>
                            <button className={styles.registerButton} id={"authBtn"} onClick={routeChange}>Авторизация</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
