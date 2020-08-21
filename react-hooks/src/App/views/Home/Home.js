import React from 'react';
import firebase from 'firebase';
import AddTodo from './AddTodo/AddTodo';

const Home = ({history}) => {
    if(!firebase.auth().currentUser){
        history.replace('/auth')
    }
    return (
        <main class="home">
            {/* <a class="logout">Logout</a> */}
            <h1>TodoList</h1>
            <AddTodo/>
            <p class="error"></p>
        </main>
    );
}

export default Home;
