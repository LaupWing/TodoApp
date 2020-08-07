export default class Todos{
    static userCollection = ()=>{
        const db = firebase.firestore().collection('todos'); 
        const id = firebase.auth().currentUser.uid;
        return db.doc(id);
    }
    static addTodo(todo, todos){
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
    static toggleChecked(todo, todos){
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
    static removeTodo(todo, todos){
        const updatedTodos = todos.filter(x=>x.todo!==todo);
        this.userCollection().set({
            todos: updatedTodos
        });
    }
}