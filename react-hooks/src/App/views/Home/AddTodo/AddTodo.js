import React, {useState} from 'react';
import styles from './AddTodo.module.css';

const AddTodo = ({todos, userCollection}) => {
    const [todo, setTodo] = useState('');
    const addingTodo = async (e)=>{
        e.preventDefault();
        
        try{
            await userCollection().set({
                todos: [...todos, {
                    done:false,
                    todo
                }]
            });
            setTodo('');
        }catch(e){
            console.log(e)
        }
    }
    return (
        <form onSubmit={addingTodo} className={styles["add"]} autoComplete="off">
            <input 
                name="todo"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
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
