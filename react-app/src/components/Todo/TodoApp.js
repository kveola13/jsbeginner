import React from "react"
import TodoItemData from "./TodoItemData"
import TodoItem from "./TodoItem"

class TodoApp extends React.Component {
    constructor(){
        super()
        this.state={
            Todos: TodoItemData
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id){
        console.log("Clicked", id)
    }

    render(){
        const Todos = this.state.Todos.map(todo => 
        <TodoItem key={todo.id}
            description={todo.description}
            completed={todo.completed}
            handleClick={this.handleClick}
        />)
        return(
            <div>
                {Todos}
            </div>
        )
    }
}

export default TodoApp