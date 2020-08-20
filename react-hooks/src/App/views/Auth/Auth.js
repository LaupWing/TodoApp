import React, {useState} from 'react';

const Auth = () => {
    const [login, setLogin] = useState(true);
    return (
        <main class="login">
            <h1>Welcome</h1>
            <div class="form-container">
                {/* <form class="login_form">
                    <input name='email' type="text" placeholder="Your Email...">
                    <input name='password' type="password" placeholder="Your Password...">
                    <p class="error"></p>
                    <button type="submit">Submit</button>
                    <a href="#">No account? Sign up here!</a>
                </form> */}
                {/* <form class="signup_form hidden">
                    <input name='email' type="text" placeholder="Your Email...">
                    <input name='password' type="password" placeholder="Your Password...">
                    <input name='password_confirm' type="password" placeholder="Confirm your Password...">
                    <p class="error"></p>
                    <button type="submit">Submit</button>
                    <a href="#">Already hava account? Login here!</a>
                </form> */}
            </div>
        </main>
    );
}

export default Auth;
