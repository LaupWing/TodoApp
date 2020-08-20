import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <form className={styles["login_form"]}>
            <input name='email' type="text" placeholder="Your Email..."/>
            <input name='password' type="password" placeholder="Your Password..."/>
            <p class="error"></p>
            <button type="submit">Submit</button>
            <a href="#">No account? Sign up here!</a>
        </form>
    );
}

export default Login;