import './db/db.js'
import render from './render/render.js';
import submitLogin from './auth/submitLogin.js';
import submitSignup from './auth/submitSignup.js';
import {addTodoSubmitHandler} from './home/submitHandlers.js';
import {dataWatcher} from './home/db/actions.js';
import logoutHandler from './auth_handlers/logoutHandler.js';
import switch_auth from './auth/switch_auth.js';

firebase.auth().onAuthStateChanged(user=>{
    if(!user){
        render('login');
        submitLogin();
        submitSignup();
        switch_auth();
    }else{
        render('home');
        logoutHandler();
        addTodoSubmitHandler();
        dataWatcher();
    }
});
