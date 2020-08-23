import React from 'react';
import AddTodo from './AddTodo/AddTodo';
import Todos from './Todos/Todos';

const Home = ({history}) => {
    // if(!firebase.auth().currentUser){
    //     history.replace('/auth')
    // }
    // const [todos, setTodos] = useState([]);
    
    // const deleteTodo = (todo)=>{
    //     userCollection().set({
    //         todos: todos.filter(x=>x!==todo)
    //     });
    // }
    // const toggleDone = (todo)=>{
    //     userCollection().set({
    //         todos: todos.map(x=>{
    //             if(x===todo){
    //                 x.done = !x.done;
    //             }
    //             return x;
    //         })
    //     });
    // }
    
    return (
        <main className="home">
            {/* <a class="logout">Logout</a> */}
            <h1>TodoList</h1>
            <AddTodo/>
            <Todos/>
            <p className="error"></p>
        </main>
    );
}

export default Home;
