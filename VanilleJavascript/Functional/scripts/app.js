import './db/db.js'
import render from './render/render.js';
import submitLoginHandler from './auth/submitLoginHandler.js';
import {addTodoSubmitHandler} from './home/submitHandlers.js';
import {dataWatcher} from './home/db/actions.js';
import logoutHandler from './auth/logoutHandler.js';

firebase.auth().onAuthStateChanged(user=>{
    if(!user){
        render('login');
        submitLoginHandler();
    }else{
        render('home');
        logoutHandler();
        addTodoSubmitHandler();
        dataWatcher();
    }
});
