import './db.js'
import render from './render.js';
import submitLogin from './login/submitLoginHandler.js';
import todoSubmitHandler from './home/todoSubmitHandler.js';
import loginErrorHandler from './errorhandler.js';
import pageContentCheck from './pageContentCheck.js'

firebase.auth().onAuthStateChanged(user=>{
    pageContentCheck();

    if(!user){
        render('login');
        submitLogin(loginErrorHandler);
    }else{
        render('home');
        todoSubmitHandler();
    }
});
