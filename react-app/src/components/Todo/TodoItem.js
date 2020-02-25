import React from "react"

function TodoItem(props) {
    return(
        <div className="todoitem">
            <input type="checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handleClick(props.item.id)}/>
            <label style={{display: props.description ? "block" : "none"}}> {props.item.description}</label>
        </div>
    )
}

export default TodoItem