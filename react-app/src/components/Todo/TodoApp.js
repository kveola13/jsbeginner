import React from "react"
import TodoItem from "./TodoItem"
import TodoItemData from "./TodoItemData"

function TodoApp(){
    const Todos = TodoItemData.map(
        todo => <TodoItem 
        key={todo.id}
        description={todo.description}
        completed={todo.completed}
        />)

    return(
        <div>
            {Todos}
        </div>
    )
}

export default TodoApp