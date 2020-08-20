import React, {useState} from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import './Auth.css'

const Auth = () => {
    const [login, setLogin] = useState(true);
    return (
        <main class="login">
            <h1>Welcome</h1>
            <div class="form-container">
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
