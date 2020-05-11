import './db.js'
import render from './render.js';
import submitLogin from './login/submitLogin.js';
import loginErrorHandler from './login/errorhandler.js';
import pageContentCheck from './pageContentCheck.js'

firebase.auth().onAuthStateChanged(user=>{
    pageContentCheck();
    
    if(!user){
        render('login');
        submitLogin(loginErrorHandler);
    }else{
        render('home');
    }
});
