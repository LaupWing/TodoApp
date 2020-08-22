import React, {useState} from 'react';
import firebase from '../../../../../../react-hooks/src/App/views/Home/node_modules/firebase';
import {withRouter} from 'react-router-dom';

const Signup = ({toggle, history}) => {
    const [error, setError] = useState(null);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password_confirm = e.target.password_confirm.value;
        if(password !== password_confirm){
            alert('Passwords doesnt match');
        }
        try{
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            setError(null);
            history.push('/');
        }catch(e){
            setError(e.message);
        }
    }
    return (
        <form className="signup_form" onSubmit={handleSubmit}>
            <input name='email' type="text" placeholder="Your Email..."/>
            <input name='password' type="password" placeholder="Your Password..."/>
            <input name='password_confirm' type="password" placeholder="Confirm your Password..."/>
            {error && <p className="error">{error}</p>}
            <button type="submit">Submit</button>
            <p className="link" onClick={()=>toggle()}>Already hava account? Login here!</p>
        </form>
    );
}

export default withRouter(Signup);
