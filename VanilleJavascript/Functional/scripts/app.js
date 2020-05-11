import './db.js'
import render from './render.js';
import submitLogin from './login/submitLogin.js';

firebase.auth().onAuthStateChanged(user=>{
    if(!user){
        render('login');
        submitLogin();
    }else{
        render('home');
    }
});