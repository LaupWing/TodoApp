import {removeChildNodes} from '../helpers/utils.js';
import {toggleChecked} from './db/actions.js';

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
            if(document.activeElement.classList.contains('done')){
                toggleChecked(e.target.querySelector('h2').textContent.trim());
            }else{
                
            }
        });
    });
}