import React from 'react'

const Todo = ({todo}) => {
    return (
        <div className="todo">
        <h2>{todo.todo}</h2>
        <div class="buttons">
            <button class="done">
                <img src={require('../../../../assets/done.svg')} alt="toggle"/>
            </button>
            <button class="delete">
                <img src={require('../../../../assets/delete.svg')} alt="delete"/>
            </button>
        </div>
    </div>
    )
}

export default Todo
