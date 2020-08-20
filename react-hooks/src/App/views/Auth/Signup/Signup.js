import React from 'react';
import firebase from 'firebase';

const Signup = ({toggle}) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password_confirm = e.target.password_confirm.value;
        if(password !== password_confirm){
            alert('Passwords doesnt match');
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    return (
        <form className="signup_form" onSubmit={(e)=>handleSubmit(e)}>
            <input name='email' type="text" placeholder="Your Email..."/>
            <input name='password' type="password" placeholder="Your Password..."/>
            <input name='password_confirm' type="password" placeholder="Confirm your Password..."/>
            <p className="error"></p>
            <button type="submit">Submit</button>
            <p className="link" onClick={()=>toggle()}>Already hava account? Login here!</p>
        </form>
    );
}

export default Signup;
