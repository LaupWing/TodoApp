import {todos} from './todos.js';
import userCollection from './userCollection.js';

export default (todo)=>{
    const updatedTodos = [...todos, todo];
    try{
        userCollection().set({
            todos: updatedTodos
        });
    }catch(e){
        console.log(e);
    }
}