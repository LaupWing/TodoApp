import React from 'react';
import styles from './Todo.module.css';



const Todo = ({todo}) => {
    return (
        <div className={`${styles["todo"]} ${todo.done? styles['done'] : ''}`}>
        <h2>{todo.todo}</h2>
        <div className={styles["buttons"]}>
            <button className={styles["done"]}>
                <img src={require('../../../../../assets/done.svg')} alt="toggle"/>
            </button>
            <button className={styles["delete"]}>
                <img src={require('../../../../../assets/delete.svg')} alt="delete"/>
            </button>
        </div>
    </div>
    );
}

export default Todo
