import React from 'react';
import firebase from 'firebase';
import AddTodo from './AddTodo/AddTodo';
import Todos from './Todos/Todos';

const Home = ({history}) => {
    if(!firebase.auth().currentUser){
        history.replace('/auth')
    }
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
