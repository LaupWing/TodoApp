import React from 'react';

const Login = () => {
    return (
        <form class="login_form">
            <input name='email' type="text" placeholder="Your Email..."/>
            <input name='password' type="password" placeholder="Your Password..."/>
            <p class="error"></p>
            <button type="submit">Submit</button>
            <p>No account? Sign up here!</p>
        </form>
    );
}

export default Login;