import Actions from '../Actions/User.js';
import Utils from '../Utils/Utils.js';
import Todo from './Todo/Todo.js';
import Todos from '../Actions/Todos.js';

export default class Home{
    constructor(){
        this.template = document.querySelector('#home');
        this.render();
        this.Todos = new Todos(this.renderTodos.bind(this));
    }
    applyEvents(){
        const form = document.querySelector('form');
        form.addEventListener('submit', this.submitTodo);
    }
    submitTodo(e){
        e.preventDefault();
        const todo = e.target.todo.value;
        const exists = Array
            .from(document.querySelectorAll('.todo'))
            .map(x=>x.textContent.trim())
            .find(x=>x===todo)
        if(exists){
            return alert('Todo already exists');
        }
        Actions.addTodo(todo); 
        e.target.todo.value = ''; 
    }
    renderTodos(todos){
        const container = document.querySelector('.todos');
        Utils.removChilds(container);
        todos.forEach(todo=>{
            new Todo(todo, this.Todos);
        });
    }
    render(){
        document
            .querySelector('#app')
            .innerHTML = this.template.innerHTML;
        this.applyEvents();
    }
}