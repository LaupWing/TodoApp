import {removeChildNodes} from '../helpers/utils.js';
import {toggleChecked, removeTodo} from './db/actions.js';

export default function renderTodos(todos){
    const container = document.querySelector('.todos');
    const todo = document.getElementById('todo');
    removeChildNodes(container);
    
    todos.forEach(td=>{
        container.insertAdjacentHTML('beforeend', todo.innerHTML);
        td.done && document
            .querySelector('.todo:last-of-type')
            .classList.add('done')
        document
            .querySelector('.todo:last-of-type')
            .querySelector('h2')
            .textContent = td.todo;
    })
    applyEvents();
}

function applyEvents(){
    document.querySelectorAll('.todo').forEach(td=>{
        td.addEventListener('submit', e=>{
            e.preventDefault();
            const todo = e.target.querySelector('h2').textContent.trim();
            if(document.activeElement.classList.contains('done')){
                toggleChecked(todo);
            }else{
                removeTodo(todo);
            }
        });
    });
}