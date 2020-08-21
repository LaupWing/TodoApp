import React from 'react';
import styles from './Todo.module.css';



const Todo = (props) => {
    console.log(props)
    return (
        <div className={styles["todo"]}>
        <h2>{props.todo}</h2>
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
