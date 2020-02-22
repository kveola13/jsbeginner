import React from "react"

function TodoItem(props) {
    return(
        <div className="todoitem">
            <input type="checkbox" checked={props.completed}/>
            <label style={{display: props.description ? "block" : "none"}}> {props.description}</label>
        </div>
    )
}

export default TodoItem