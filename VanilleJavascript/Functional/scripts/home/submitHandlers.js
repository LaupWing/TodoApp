import {addTodo} from './db/actions.js';

export const addTodoSubmitHandler =  ()=>{
    document.querySelector('form').addEventListener('submit',async (e)=>{
        e.preventDefault();
        const todo = e.target.todo.value;
        const exists = Array
            .from(document.querySelectorAll('.todo'))
            .map(x=>x.textContent.trim())
            .find(x=>x===todo)
        if(exists){
            return alert('Todo already exists');
        }
        addTodo(todo); 
        e.target.todo.value = '';       
    });
}