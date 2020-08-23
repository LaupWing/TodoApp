import React from 'react';
import Todo from './Todo/Todo'

const Todos = () => {
    const todos = [];
    return (
        <div className="todos">
            {todos && todos.map((todo, i)=>
                <Todo key={i} todo={todo}/>
            )}
        </div>
    );
}

export default Todos;
