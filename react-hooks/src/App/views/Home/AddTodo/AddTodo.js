import React from 'react';
import styles from './AddTodo.module.css';

const AddTodo = ({todos, userCollection}) => {
    const addingTodo = (e)=>{
        const todo = e.target.todo.value;

        userCollection().set({
            todos: [...todos, {
                done:false,
                todo
            }]
        })
    }
    return (
        <form onSubmit={addingTodo} className={styles["add"]} autoComplete="off">
            <input 
                name="todo"
                placeholder="What do you want to add" 
                type="text"
            />
            <button type="submit">
                <img src={require('../../../../assets/plus.svg')} alt="add"/>
            </button>
        </form>
    );
}

export default AddTodo;
