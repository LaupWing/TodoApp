import React from 'react';

const Signup = ({toggle}) => {
    return (
        <form class="signup_form">
            <input name='email' type="text" placeholder="Your Email..."/>
            <input name='password' type="password" placeholder="Your Password..."/>
            <input name='password_confirm' type="password" placeholder="Confirm your Password..."/>
            <p class="error"></p>
            <button type="submit">Submit</button>
            <p className="link" onClick={()=>toggle()}>Already hava account? Login here!</p>
        </form>
    );
}

export default Signup;
