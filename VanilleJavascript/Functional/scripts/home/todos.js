import userCollection from './userCollection.js';
import errorHandler from '../errorhandler.js';
export let todos = []

export async function fetchTodos(){
    try{
        const collection = await userCollection().get();
        console.log(collection);
        if(collection.exists){
            todos = collection.data().todos;
        }
    }catch(e){
        errorHandler(e.message);
    }
}