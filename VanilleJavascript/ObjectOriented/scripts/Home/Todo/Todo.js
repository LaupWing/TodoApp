import Todos from '../../Actions/Todos.js';

export default class Todo{
    constructor(todoObj, todos){
        this.container = document.querySelector('.todos');
        this.todo = document.getElementById('todo');
        this.todoObj = todoObj;
        this.render();
        this.todos = todos;
    }
    addEvent(td){
        td.addEventListener('submit', e=>{
            e.preventDefault();
            const todo = e.target.querySelector('h2').textContent.trim();
            if(document.activeElement.classList.contains('done')){
                Todos.toggleChecked(todo, this.todos);
            }else{
                Todos.removeTodo(todo, this.todos);
            }
        });
    }
    render(){
        this.container.insertAdjacentHTML('beforeend', this.todo.innerHTML);
         this.todoObj.done && document
            .querySelector('.todo:last-of-type')
            .classList.add('done')
        const todo =document.querySelector('.todo:last-of-type')
        todo
            .querySelector('h2')
            .textContent = this.todoObj.todo;
        this.addEvent(todo);
    }
}