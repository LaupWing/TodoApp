import Actions from '../Actions/Actions.js';

export default class Home{
    constructor(){
        this.template = document.querySelector('#home');
        this.render();
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
        // addTodo(todo); 
        e.target.todo.value = ''; 
    }
    render(){
        document
            .querySelector('#app')
            .innerHTML = this.template.innerHTML;
        this.applyEvents();
    }
}