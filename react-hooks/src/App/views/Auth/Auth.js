import React, {useState} from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import './Auth.css';
import {CSSTransition} from 'react-transition-group';

const Auth = () => {
    const [login, setLogin] = useState(true);
    return (
        <main className="login">
            <h1>Welcome</h1>
            <div className="form-container">
            <CSSTransition in={login} timeout={200} classNames="node"> 
                <Login 
                    toggle={()=>setLogin(!login)}
                /> 
            </CSSTransition>
            <CSSTransition in={!login} timeout={200} classNames="node"> 
                <Signup
                    toggle={()=>setLogin(!login)}
                />
            </CSSTransition>

            </div>
        </main>
    );
}

export default Auth;
