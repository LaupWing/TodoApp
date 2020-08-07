class Todo{
    constructor(todoObj){
        this.container = document.querySelector('.todos');
        this.todo = document.getElementById('todo');
        this.todoObj = todoObj;
        this.render();
    }
    event(td){
        td.addEventListener('submit', e=>{
            e.preventDefault();
            const todo = e.target.querySelector('h2').textContent.trim();
            if(document.activeElement.classList.contains('done')){
                toggleChecked(todo);
            }else{
                removeTodo(todo);
            }
        });
    }
    render(){
        this.container.insertAdjacentHTML('beforeend', this.todo.innerHTML);
         this.todoObj.done && document
            .querySelector('.todo:last-of-type')
            .classList.add('done')
        const todo =document.querySelector('.todo:last-of-type')
        todo.querySelector('h2')
        todo.textContent = this.todoObj.todo;
        this.addEvent(todo);
    }
}