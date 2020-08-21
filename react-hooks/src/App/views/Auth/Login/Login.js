import React, {useState} from 'react';
import firebase from 'firebase';

const Login = ({toggle}) => {
    const [error, setError] = useState(null);
    const handleSubmit = (e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        
        try{
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
        }catch(e){
            setError(e.message);
        }
    }

    return (
        <form className="login_form" onSubmit={handleSubmit}>
            <input name='email' type="text" placeholder="Your Email..."/>
            <input name='password' type="password" placeholder="Your Password..."/>
            {error && <p className="error">{error}</p>}
            <button type="submit">Submit</button>
            <p className="link" onClick={()=>toggle()}>No account? Sign up here!</p>
        </form>
    );
}

export default Login;