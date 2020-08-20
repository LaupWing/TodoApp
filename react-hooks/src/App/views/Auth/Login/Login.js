import React from 'react';

const Login = ({toggle}) => {
    return (
        <form className="login_form">
            <input name='email' type="text" placeholder="Your Email..."/>
            <input name='password' type="password" placeholder="Your Password..."/>
            <p className="error"></p>
            <button type="submit">Submit</button>
            <p className="link" onClick={()=>toggle()}>No account? Sign up here!</p>
        </form>
    );
}

export default Login;