import {todos} from '../todos.js';
import renderTodos from '../todos.js';

const userCollection =  ()=>{
    const db = firebase.firestore().collection('todos'); 
    const id = firebase.auth().currentUser.uid;
    return db.doc(id);
}

export const addTodo = (todo)=>{
    const updatedTodos = [...todos, todo];
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
            renderTodos();
        }
    });
}