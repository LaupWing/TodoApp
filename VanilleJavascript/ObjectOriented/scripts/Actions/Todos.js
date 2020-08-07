export default class Todos{
    constructor(renderTodos){
        this.todos =[];
        this.renderTodos = renderTodos;
        this.userCollection().onSnapshot(snap=>{
            if(snap.exists){
                this.todos = snap.data().todos;
                this.renderTodos(this.todos);
            }
        });
    }
    userCollection = ()=>{
        const db = firebase.firestore().collection('todos'); 
        const id = firebase.auth().currentUser.uid;
        return db.doc(id);
    }
    addTodo(todo){
        const updatedTodos = [...todos, {
            done: false,
            todo
        }];
        try{
            this.userCollection().set({
                todos: updatedTodos
            });
        }catch(e){
            console.log(e);
        }
    }
    toggleChecked(todo){
        const updatedTodos = todos.map(x=>{
            if(x.todo === todo){
                x.done = !x.done;
            }
            return x;
        });
        this.userCollection().set({
            todos: updatedTodos
        });
    }
    removeTodo(todo){
        const updatedTodos = todos.filter(x=>x.todo!==todo);
        this.userCollection().set({
            todos: updatedTodos
        });
    }
}