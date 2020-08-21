import React, {useState} from 'react';
import firebase from 'firebase';
import Todo from './Todo/Todo'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const userCollection = ()=>{
        const db = firebase.firestore().collection('todos')
        const id = firebase.auth().currentUser.uid
        
        return db.doc(id)
    }
    userCollection().onSnapshot(snap=>{
        if(snap.exists){
            setTodos(snap.data().todos)
        }
    })
    return (
        <div className="todos">
            {todos && todos.map(todo=><Todo todo={todo}/>)}
        </div>
    );
}

export default Todos;
