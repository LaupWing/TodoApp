import {addTodo} from './db/actions.js';

export default ()=>{
    document.querySelector('form').addEventListener('submit',async (e)=>{
        e.preventDefault();
        const todo = e.target.todo.value;
        addTodo(todo); 
        e.target.todo.value = '';       
    });
}