import React from "react"

function TodoItem(props) {
    return(
        <div className="todoitem">
            <input type="checkbox" 
            checked={props.completed} 
            onChange={() => console.log(props.description + " was changed")}/>
            <label style={{display: props.description ? "block" : "none"}}> {props.description}</label>
        </div>
    )
}

export default TodoItem