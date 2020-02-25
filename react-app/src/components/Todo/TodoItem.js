import React from "react"

function TodoItem(props) {
    const fullStyle = <h3><i><s><u>{props.item.description}</u></s></i></h3>
    const noStyle = <h3>{props.item.description}</h3>
    return(
        <div className="todoitem">
            <input type="checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handleClick(props.item.id)}/>
            {props.item.completed ? fullStyle : noStyle}
        </div>
    )
}

export default TodoItem