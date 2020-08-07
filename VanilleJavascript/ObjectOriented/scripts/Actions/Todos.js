export default class Todos{
    // constructor(renderTodos){
    //     this.todos =[];
    //     this.renderTodos = renderTodos;
    //     this.userCollection().onSnapshot(snap=>{
    //         if(snap.exists){
    //             this.todos = snap.data().todos;
    //             this.renderTodos(this.todos);
    //         }
    //     });
    // }
    static userCollection = ()=>{
        const db = firebase.firestore().collection('todos'); 
        const id = firebase.auth().currentUser.uid;
        return db.doc(id);
    }
    static addTodo(todo){
        const updatedTodos = [...this.todos, {
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
    static toggleChecked(todo){
        const updatedTodos = this.todos.map(x=>{
            if(x.todo === todo){
                x.done = !x.done;
            }
            return x;
        });
        this.userCollection().set({
            todos: updatedTodos
        });
    }
    static removeTodo(todo){
        const updatedTodos = this.todos.filter(x=>x.todo!==todo);
        this.userCollection().set({
            todos: updatedTodos
        });
    }
}