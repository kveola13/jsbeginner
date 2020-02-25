import React from "react"

function TodoItem(props) {
    return(
        <div className="todoitem">
            <input type="checkbox" 
            checked={props.todo.completed} 
            onChange={() => props.handleClick(props.todo.id)}/>
            <label style={{display: props.description ? "block" : "none"}}> {props.todo.description}</label>
        </div>
    )
}

export default TodoItem