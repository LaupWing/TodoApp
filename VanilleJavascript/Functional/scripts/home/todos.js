import {removeChildNodes} from '../helpers/utils.js';

export let todos = []

export default function renderTodos(){
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
    applyEvents();
}

function applyEvents(){
    document.querySelectorAll('.todo').forEach(td=>{
        td.addEventListener('submit', e=>{
            e.preventDefault();
            if(document.activeElement.classList.contains('done')){
                e.target.classList.add('finished');
            }
        });
    });
}