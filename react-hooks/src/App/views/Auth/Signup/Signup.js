import React from 'react';

const Signup = () => {
    return (
        <form class="signup_form hidden">
            <input name='email' type="text" placeholder="Your Email..."/>
            <input name='password' type="password" placeholder="Your Password..."/>
            <input name='password_confirm' type="password" placeholder="Confirm your Password..."/>
            <p class="error"></p>
            <button type="submit">Submit</button>
            <p>Already hava account? Login here!</p>
        </form>
    );
}

export default Signup;
