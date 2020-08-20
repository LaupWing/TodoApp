import React, {useState} from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import './Auth.css';
import firebase from 'firebase';

const Auth = ({history}) => {
    const [login, setLogin] = useState(true);
    if(firebase.auth().user){
        history.replace('/');
    }

    return (
        <main className="login">
            <h1>Welcome</h1>
            <div className="form-container">
                {login? 
                    <Login 
                        toggle={()=>setLogin(!login)}
                    /> : 
                    <Signup
                        toggle={()=>setLogin(!login)}
                    />}
            </div>
        </main>
    );
}

export default Auth;
