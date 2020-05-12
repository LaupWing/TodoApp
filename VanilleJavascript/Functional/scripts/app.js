import './db.js'
import render from './render.js';
import submitLoginHandler from './login/submitLoginHandler.js';
import todoSubmitHandler from './home/todoSubmitHandler.js';
import pageContentCheck from './pageContentCheck.js'
import {fetchTodos} from './home/todos.js';

firebase.auth().onAuthStateChanged(user=>{
    pageContentCheck();

    if(!user){
        render('login');
        submitLoginHandler();
    }else{
        render('home');
        todoSubmitHandler();
        fetchTodos();
    }
});
