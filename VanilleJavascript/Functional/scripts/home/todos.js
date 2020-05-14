import userCollection from './userCollection.js';
import errorHandler from '../errorhandler.js';

export let todos = []

export async function fetchTodos(){
    try{
        const collection = await userCollection().get();
        if(collection.exists){
            todos = collection.data().todos;
        }
        renderTodos();
    }catch(e){
        errorHandler(e.message);
    }
}

function renderTodos(){
    const container = document.querySelector('.todos');
    const todo = document.getElementById('todo');
    todos.forEach(td=>{
        container.insertAdjacentHTML('beforeend', todo.innerHTML);
        console.log(td)
    })
}