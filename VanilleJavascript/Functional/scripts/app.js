import './db/db.js'
import render from './render/render.js';
import submitLoginHandler from './auth/submitLoginHandler.js';
import todoSubmitHandler from './home/todoSubmitHandler.js';
import {dataWatcher} from './home/todos.js';
import logoutHandler from './auth/logoutHandler.js';

firebase.auth().onAuthStateChanged(user=>{
    if(!user){
        render('login');
        submitLoginHandler();
    }else{
        render('home');
        logoutHandler();
        todoSubmitHandler();
        dataWatcher();
    }
});
