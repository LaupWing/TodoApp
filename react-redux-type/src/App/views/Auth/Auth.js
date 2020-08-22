import React, {useState} from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import './Auth.css';
import firebase from '../../../../../react-hooks/src/App/views/Home/node_modules/firebase';

const Auth = ({history}) => {
    const [login, setLogin] = useState(true);
    if(firebase.auth().currentUser){
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
