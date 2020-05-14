import userCollection from './userCollection.js';
import {removeChildNodes} from '../utils.js';

export let todos = []

function renderTodos(){
    const container = document.querySelector('.todos');
    const todo = document.getElementById('todo');
    
    removeChildNodes(container);
    
    todos.forEach(td=>{
        container.insertAdjacentHTML('beforeend', todo.innerHTML);
        document
            .querySelector('.todo:last-of-type')
            .querySelector('h2')
            .textContent = td;
    })
}

export function dataWatcher(){
    userCollection().onSnapshot(snap=>{
        if(snap.exists){
            todos = snap.data().todos;
            renderTodos();
        }
    });
}