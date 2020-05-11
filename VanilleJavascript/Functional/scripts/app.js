import './db.js'
import render from './render.js';
import submitLogin from './login/submitLogin.js';
import loginErrorHandler from './login/errorhandler.js';

firebase.auth().onAuthStateChanged(user=>{
    if(!user){
        render('login');
        submitLogin(loginErrorHandler);
    }else{
        render('home');
    }
});