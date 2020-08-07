export default class Actions{
    static userCollection = ()=>{
        const db = firebase.firestore().collection('todos'); 
        const id = firebase.auth().currentUser.uid;
        return db.doc(id);
    }
    static createUser(email, password){
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(function(err) {
                const error = document.querySelector('p.error');
                error.textContent = err.message;
            });
    }
    static loginUser(email, password){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(e=>errorHandler(e.message));
    }
    static addTodo(todo){
        const updatedTodos = [...todos, {
            done: false,
            todo
        }];
        try{
            userCollection().set({
                todos: updatedTodos
            });
        }catch(e){
            console.log(e);
        }
    }
    static toggleChecked(todo){
        const updatedTodos = todos.map(x=>{
            if(x.todo === todo){
                x.done = !x.done;
            }
            return x;
        });
        userCollection().set({
            todos: updatedTodos
        });
    }
    static removeTodo(todo){
        const updatedTodos = todos.filter(x=>x.todo!==todo);
        userCollection().set({
            todos: updatedTodos
        });
    }
}