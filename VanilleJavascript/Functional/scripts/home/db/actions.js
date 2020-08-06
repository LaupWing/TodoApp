import renderTodos from '../renderTodos.js';
let todos = [];

const userCollection =  ()=>{
    const db = firebase.firestore().collection('todos'); 
    const id = firebase.auth().currentUser.uid;
    return db.doc(id);
}

export const addTodo = (todo)=>{
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

export function dataWatcher(){
    userCollection().onSnapshot(snap=>{
        if(snap.exists){
            todos = snap.data().todos;
            renderTodos(todos);
        }
    });
}

export function toggleChecked(todo){
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
export function removeTodo(todo){
    const updatedTodos = todos.filter(x=>x.todo!==todo);
    userCollection().set({
        todos: updatedTodos
    });
}