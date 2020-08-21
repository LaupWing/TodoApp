import React from 'react';
import styles from './AddTodo.module.css';

const AddTodo = () => {
    return (
        <form className={styles["add"]} autocomplete="off">
        <input 
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
