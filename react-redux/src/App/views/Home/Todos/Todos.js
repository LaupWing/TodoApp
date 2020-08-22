import React from 'react';
import Todo from './Todo/Todo'

const Todos = ({todos,deleteTodo,toggleDone}) => {
      
    return (
        <div className="todos">
            {todos && todos.map((todo, i)=>
                <Todo 
                    key={i} 
                    deleteTodo={deleteTodo} 
                    toggleDone={toggleDone}
                    todo={todo}/>
            )}
        </div>
    );
}

export default Todos;
