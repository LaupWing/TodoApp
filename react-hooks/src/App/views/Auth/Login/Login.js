import React from 'react';

const Login = () => {
    return (
        <form className="login_form">
            <input name='email' type="text" placeholder="Your Email..."/>
            <input name='password' type="password" placeholder="Your Password..."/>
            <p className="error"></p>
            <button type="submit">Submit</button>
            <p className="link">No account? Sign up here!</p>
        </form>
    );
}

export default Login;