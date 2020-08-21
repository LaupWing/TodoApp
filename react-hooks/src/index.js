import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import './db';
import {BrowserRouter} from 'react-router-dom';
import firebase from 'firebase';


let flag = true;
firebase.auth().onAuthStateChanged(user=>{
    if(flag){
        flag = false;
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
