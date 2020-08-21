import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import Todo from './Todo/Todo'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const userCollection = ()=>{
        const db = firebase.firestore().collection('todos')
        const id = firebase.auth().currentUser.uid
        
        return db.doc(id)
    }
    const deleteTodo = (todo)=>{
        userCollection().set({
            todos: todos.filter(x=>x!==todo)
        });
    }
    useEffect(()=>{
        userCollection().onSnapshot(snap=>{
            if(snap.exists){
                const {todos} = snap.data()
                setTodos(todos)
            }
        })

    },[])
    return (
        <div className="todos">
            {todos && todos.map((todo, i)=>
                <Todo 
                    key={i} 
                    deleteTodo={deleteTodo} 
                    todo={todo}/>
            )}
        </div>
    );
}

export default Todos;
